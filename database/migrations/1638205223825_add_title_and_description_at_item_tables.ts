import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Items extends BaseSchema {
  protected tableName = 'items'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.text('title').nullable().after('name')
      table.text('description').nullable().after('title')
      table.string('slug').nullable().after('description')
      table.boolean('active').defaultTo(0).after('slug')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('title')
      table.dropColumn('description')
      table.dropColumn('slug')
      table.dropColumn('active')
    })
  }
}
