import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Items extends BaseSchema {
  protected tableName = 'items'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.double('price').nullable().after('name')
      table.boolean('survey').defaultTo(0).after('price')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').after('survey')
      table.dateTime('deleted_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('price')
      table.dropColumn('survey')
      table.dropColumn('user_id')
      table.dropColumn('deleted_at')
    })
  }
}
