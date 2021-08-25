import Route from '@ioc:Adonis/Core/Route'
import DemoController from 'App/Controllers/Http/demoController'

Route.get('/get', async (ctx) => {
  return new DemoController().get(ctx)
})

Route.post('/post', async (ctx) => {
  return new DemoController().post(ctx)
})
