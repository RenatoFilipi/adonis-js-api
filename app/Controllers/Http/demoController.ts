import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DemoController {
  public async get(ctx: HttpContextContract) {
    console.log(ctx.request.body())
    return ctx.request.body()
  }

  public async post(ctx: HttpContextContract) {
    console.log(ctx.request.body())
    return ctx.request.body()
  }
}
