import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('phone_id').unsigned().nullable().references('id').inTable('phones').onDelete('CASCADE').after('address')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('phone_id')
    })
  }
}
