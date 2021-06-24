import Route from '@ioc:Adonis/Core/Route'
import Release from 'App/Models/Release'

Route.get('/', async () => {
  return { api: "API tokens", route: '/', group: 'fiicode © ' + (new Date().getFullYear())}
})

/**
 * ROUTE FOR AUTHENTICATION
 */
Route.group(() => {
  Route.post('/login', 'Auth/AuthController.login')
  Route.post('/register', 'Auth/AuthController.register')
  Route.group(() => {
    Route.get('/me', async ({auth}) => {
      return auth
    }).middleware('auth')
    Route.post('/logout', async ({ auth }) => {
      await auth.use('api').revoke()
      return {
        revoked: true
      }
    })
  }).middleware('auth')
}).prefix('access')

/**
 * ROUTE FOR fstore APP
 */
Route.group(() => {
  Route.get('/release/windows', async () => {
    const windows = await Release.query().where('terminal', 'windows').orderBy('id', 'desc').first()
    return windows?.url
  })
  Route.group(() => {
    Route.resource('items', 'ItemsController').apiOnly()
    Route.resource('releases', 'ReleasesController').apiOnly()
  }).middleware('auth:api')
}).prefix('fstore')

Route.get('/release/macos', async () => {
  const macos = await Release.query().where('terminal', 'macos').orderBy('id', 'desc').first()
  return macos?.url
})
