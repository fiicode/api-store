import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lists extends BaseSchema {
  protected tableName = 'lists'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('store_id').unsigned().nullable().references('id').inTable('stores').onDelete('CASCADE').after('invoice')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('store_id')
    })
  }
}
