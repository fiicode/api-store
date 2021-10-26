import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lists extends BaseSchema {
  protected tableName = 'lists'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.date('schedule').nullable().after('created_at')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('schedule')
    })
  }
}
