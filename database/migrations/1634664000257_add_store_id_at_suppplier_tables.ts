import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Suppliers extends BaseSchema {
  protected tableName = 'suppliers'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('store_id').unsigned().nullable().references('id').inTable('stores').onDelete('CASCADE').after('user_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('store_id')
    })
  }
}
