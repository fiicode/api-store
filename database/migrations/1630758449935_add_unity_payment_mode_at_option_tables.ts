import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Options extends BaseSchema {
  protected tableName = 'options'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.boolean('unity').defaultTo(0).after('name')
      table.boolean('payment_mode').defaultTo(0).after('unity')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('unity')
      table.dropColumn('payment_mode')
    })
  }
}
