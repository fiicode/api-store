import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lists extends BaseSchema {
  protected tableName = 'lists'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('deliverer_id').unsigned().nullable().references('id').inTable('deliverers').onDelete('CASCADE').after('customer_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('deliverer_id')
    })
  }
}
