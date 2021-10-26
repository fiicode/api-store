import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lists extends BaseSchema {
  protected tableName = 'lists'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('invoice_id').unsigned().nullable().references('id').inTable('invoices').onDelete('CASCADE').after('order_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('invoice_id')
    })
  }
}
