import Route from '@ioc:Adonis/Core/Route'
import DemoController from 'App/Controllers/Http/demoController'

//Route.get('/get', 'DemoController.get')

Route.get('/get', async () => {
  return new DemoController().get()
})

//Route.post('/post', 'DemoController.post')

Route.post('/post', async (ctx) => {
  return new DemoController().post(ctx)
})
