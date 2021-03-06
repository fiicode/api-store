import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item';

export default class ItemsController {
  public async index ({}: HttpContextContract) {
    return Item.all()
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({request, response}: HttpContextContract) {
    const name = request.input('name');
    Item.create({name: name})

    return response.created({"created": true})
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({request, params, response}: HttpContextContract) {
    const item = await Item.findOrFail(params.id)
    item.name = request.input('name')

    item.save()

    return response.created(response)
  }

  public async destroy ({}: HttpContextContract) {
  }
}
