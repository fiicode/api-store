import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Phones extends BaseSchema {
  protected tableName = 'phones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('number').unique(),
      table.integer('user_id').unsigned().nullable().references('id').inTable('users').onDelete('CASCADE')

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
