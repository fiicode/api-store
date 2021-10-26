import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lists extends BaseSchema {
  protected tableName = 'lists'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('unity_id').unsigned().nullable().references('id').inTable('options').onDelete('CASCADE').after('quantity')
      // table.integer('payment_id').unsigned().nullable().references('id').inTable('options').onDelete('CASCADE').after('maxselling')
      table.integer('customer_id').unsigned().nullable().references('id').inTable('customers').onDelete('CASCADE').after('user_id')
      table.integer('supplier_id').unsigned().nullable().references('id').inTable('suppliers').onDelete('CASCADE').after('customer_id')
      table.integer('customer_payment_mode_id').unsigned().nullable().references('id').inTable('options').onDelete('CASCADE').after('maxselling')
      table.integer('account_id').unsigned().nullable().references('id').inTable('phones').onDelete('CASCADE').after('customer_payment_mode_id')
      table.integer('deliverer_payment_mode_id').unsigned().nullable().references('id').inTable('options').onDelete('CASCADE').after('account_id')
      table.double('cost').unsigned().defaultTo(0).after('deliverer_payment_mode_id')
      table.double('paye').unsigned().defaultTo(0).after('cost')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('unity_id')
      // table.dropColumn('payment_id')
      table.dropColumn('customer_id')
      table.dropColumn('supplier_id')
      table.dropColumn('customer_payment_mode_id')
      table.dropColumn('account_id')
      table.dropColumn('deliverer_payment_mode_id')
      table.dropColumn('cost')
      table.dropColumn('paye')
    })
  }
}
