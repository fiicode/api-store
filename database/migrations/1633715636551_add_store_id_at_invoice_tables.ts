import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Invoices extends BaseSchema {
  protected tableName = 'invoices'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('store_id').unsigned().nullable().references('id').inTable('stores').onDelete('CASCADE').after('id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('store_id')
    })
  }
}
