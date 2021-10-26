import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Options extends BaseSchema {
  protected tableName = 'options'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.boolean('permispage').defaultTo(0).after('name')
      table.boolean('social').defaultTo(0).after('permispage')
      table.integer('store_id').unsigned().nullable().references('id').inTable('stores').onDelete('CASCADE').after('user_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('role')
      table.dropColumn('social')
      table.dropColumn('store_id')
    })
  }
}
