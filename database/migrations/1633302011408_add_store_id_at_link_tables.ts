import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Links extends BaseSchema {
  protected tableName = 'links'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('store_id').unsigned().nullable().references('id').inTable('stores').onDelete('CASCADE').after('supplier_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('supplier_id')
    })
  }
}
