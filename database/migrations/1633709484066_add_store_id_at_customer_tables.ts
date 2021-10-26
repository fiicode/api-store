import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('store_id').unsigned().nullable().references('id').inTable('stores').onDelete('CASCADE').after('description')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('store_id')
    })
  }
}
