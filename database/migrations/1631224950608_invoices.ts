import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Invoices extends BaseSchema {
  protected tableName = 'invoices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('customer_id').unsigned().nullable().references('id').inTable('customers').onDelete('CASCADE')
      table.integer('deliverer_id').unsigned().nullable().references('id').inTable('deliverers').onDelete('CASCADE')
      table.integer('paiement_mode_to_global_customer_id').unsigned().nullable().references('id').inTable('options').onDelete('CASCADE')
      table.integer('account_paiement_to_global_customer_id').unsigned().nullable().references('id').inTable('phones').onDelete('CASCADE')
      table.double('total').defaultTo(0)
      table.double('paye').defaultTo(0)
      table.double('interest').defaultTo(0)
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
