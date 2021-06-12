import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {

  public async login ({ request, auth, response }: HttpContextContract) {
    const data = await request.validate({
      schema: schema.create({
        email:schema.string({}, [
          rules.email()
        ]),
        password: schema.string({}, [
          rules.minLength(2)
        ])
      })
    })
    const email = data.email
    const password = data.password

    // try {
    //   const token = await auth.use('api').attempt(email, password)
    //   return token
    // } catch {
    //   return response.badRequest('Invalid credentials')
    // }

    const user = await User
    .query()
    .where('email', email)
    // .whereNull('is_deleted')
    .firstOrFail()

    // Verify password
    if (!(await Hash.verify(user.password, password))) {
      return response.badRequest('Invalid credentials')
    }

    // Generate token
    const token = await auth.use('api').generate(user, {
      expiresIn: '10mins'
    })
    return token.toJSON()
  }

  public async register ({ request, auth}: HttpContextContract) {
    const data = await request.validate({
      schema: schema.create({
        email: schema.string({}, [
          rules.email(),
          rules.unique({ table: 'users', column: 'email'})
        ]),
        password: schema.string({}, [
          rules.confirmed()
        ])
      }),
    })
    const user = await User.create(data)

    // Send email or number verification

    const token = await auth.use("api").login(user, {
      expiresIn: "1days",
    });
    return token.toJSON();
  }
}
