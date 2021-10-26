import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Links extends BaseSchema {
  protected tableName = 'links'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('role_id').unsigned().nullable().references('id').inTable('links').onDelete('CASCADE').after('supplier_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('role_id')
    })
  }
}
