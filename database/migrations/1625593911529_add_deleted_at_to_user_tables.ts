import { afterCreate } from '@ioc:Adonis/Lucid/Orm'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dateTime('deleted_at', { useTz: true }).after('updated_at')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('deleted_at')
    })
  }
}
