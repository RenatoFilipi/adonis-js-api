import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DemoController {
  public async get() {
    return { msg: 'Controller get route working!' }
  }

  public async post(ctx: HttpContextContract) {
    console.log(ctx.request.body())
    return { msg: 'Controller post route working!' }
  }
}
