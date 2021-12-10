import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stories extends BaseSchema {
  protected tableName = 'stories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('old').nullable()
      table.text('new').nullable()
      table.boolean('active').defaultTo(1)
      table.boolean('delete').defaultTo(0)
      table.integer('reference').unsigned().nullable()
      table.string('field').nullable().comment('champs des tables')
      table.string('table').nullable()
      table.enum( 'action',['update', 'delete', 'archive']).nullable()
      table.integer('user_id').unsigned().nullable().references('id').inTable('users').onDelete('CASCADE')
      table.integer('store_id').unsigned().nullable().references('id').inTable('stores').onDelete('CASCADE')
      table.integer('customer_id').unsigned().nullable().references('id').inTable('customers').onDelete('CASCADE')
      table.integer('deliverer_id').unsigned().nullable().references('id').inTable('deliverers').onDelete('CASCADE')
      table.integer('invoice_id').unsigned().nullable().references('id').inTable('invoices').onDelete('CASCADE')
      table.integer('item_id').unsigned().nullable().references('id').inTable('items').onDelete('CASCADE')
      table.integer('list_id').unsigned().nullable().references('id').inTable('lists').onDelete('CASCADE')
      table.integer('option_id').unsigned().nullable().references('id').inTable('options').onDelete('CASCADE')
      table.integer('order_id').unsigned().nullable().references('id').inTable('orders').onDelete('CASCADE')
      table.integer('phone_id').unsigned().nullable().references('id').inTable('phones').onDelete('CASCADE')
      table.integer('role_id').unsigned().nullable().references('id').inTable('roles').onDelete('CASCADE')
      table.integer('supplier_id').unsigned().nullable().references('id').inTable('suppliers').onDelete('CASCADE')
      table.boolean('deleted').defaultTo(0)

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
