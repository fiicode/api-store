import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Phones extends BaseSchema {
  protected tableName = 'phones'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.boolean('account').defaultTo(0).after('number')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('account')
    })
  }
}
