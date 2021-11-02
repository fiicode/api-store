import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CurrentStores extends BaseSchema {
  protected tableName = 'current_stores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().nullable().references('id').inTable('users').onDelete('CASCADE')
      table.integer('store_id').unsigned().nullable().references('id').inTable('stores').onDelete('CASCADE')
      table.boolean('online').defaultTo(0)
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.dateTime('created_at', { useTz: true })
       table.dateTime('updated_at', { useTz: true })
       table.dateTime('deleted_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
