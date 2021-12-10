import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Options extends BaseSchema {
  protected tableName = 'options'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.boolean('isfield').defaultTo(0).after('name')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('isfield')
    })
  }
}
