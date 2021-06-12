import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
  public async handle ({auth}: HttpContextContract, next: () => Promise<void>) {
    if (auth.isAuthenticated) {
      return { auth: "connected" }
    } else {
      return { auth: "disconnected" }
    }
    await next()
  }
}
