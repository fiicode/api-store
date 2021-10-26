import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Deliverers extends BaseSchema {
  protected tableName = 'deliverers'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('name').nullable().alter()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.string('name').notNullable()
    })
  }
}
