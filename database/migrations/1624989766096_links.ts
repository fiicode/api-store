import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Links extends BaseSchema {
  protected tableName = 'links'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').nullable()
      table.integer('customer_id').unsigned().references('id').inTable('customers').onDelete('CASCADE').nullable()
      table.integer('option_id').unsigned().references('id').inTable('options').onDelete('CASCADE').nullable()

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
