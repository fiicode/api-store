import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Links extends BaseSchema {
  protected tableName = 'links'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('deliverer_id').unsigned().nullable().references('id').inTable('deliverers').onDelete('CASCADE').after('option_id')
      table.integer('phone_id').unsigned().nullable().references('id').inTable('phones').onDelete('CASCADE').after('deliverer_id')
      table.integer('user_from_to_id').unsigned().nullable().references('id').inTable('users').onDelete('CASCADE').after('phone_id')
      table.integer('supplier_id').unsigned().nullable().references('id').inTable('suppliers').onDelete('CASCADE').after('user_from_to_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('deliverer_id')
      table.dropColumn('phone_id')
      table.dropColumn('user_from_to_id')
      table.dropColumn('supplier_id')
    })
  }
}
