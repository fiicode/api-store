import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.boolean('active').defaultTo(0).after('id')
      table.string('avatar').nullable().after('password')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('avatar')
    })
  }
}
