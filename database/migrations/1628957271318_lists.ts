import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lists extends BaseSchema {
  protected tableName = 'lists'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('item_id').unsigned().references('id').inTable('items').onDelete('CASCADE')
      table.double('quantity').unsigned().defaultTo(0)
      table.double('purchaseprice').unsigned().defaultTo(0)
      table.double('minselling').unsigned().defaultTo(0)
      table.double('maxselling').unsigned().defaultTo(0)
      table.integer('order_id').unsigned().nullable().references('id').inTable('orders').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.boolean('order').defaultTo(0)
      table.boolean('invoice').defaultTo(0)
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
      table.dateTime('deleted_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
