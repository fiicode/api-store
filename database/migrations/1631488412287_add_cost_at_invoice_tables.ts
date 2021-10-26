import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Invoices extends BaseSchema {
  protected tableName = 'invoices'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.double('cost').unsigned().defaultTo(0).after('account_paiement_to_global_customer_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('cost')
    })
  }
}
