import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { api: "API tokens", route: '/', group: 'fiicode © ' + (new Date().getFullYear())}
})
/**
 * ROUTE FOR AUTHENTICATION
 */
Route.group(() => {
  Route.post('/login', 'Auth/AuthController.login')
  Route.post('/register', 'Auth/AuthController.register')
  Route.get('/me', async ({auth}) => {
    return auth
  }).middleware('auth')
  Route.post('/logout', async ({ auth, response }) => {
    await auth.use('api').revoke()
    return {
      revoked: true
    }
  }).middleware('auth')
}).prefix('access')

/**
 * ROUTE FOR fstore APP
 */
Route.group(() => {
  Route.group(() => {
    Route.resource('items', 'ItemsController').apiOnly()
  }).prefix('fstore')
}).middleware('auth:api')
