import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Navigations extends BaseSchema {
  protected tableName = 'navigations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('page')
      table.text('url')
      table.text('params').nullable()
      table.enum( 'action',[ 'view', 'create','update', 'delete', 'archive', 'onClick', 'onChange', 'clickRight', 'other']).defaultTo('view')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('store_id').unsigned().references('id').inTable('stores').onDelete('CASCADE')
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.dateTime('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
