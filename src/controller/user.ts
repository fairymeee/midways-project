import { Inject, Controller, Post, Body, Get } from '@midwayjs/decorator';
import { UserModel } from '../model/user.model';
import { UserLoginDTO } from '../dto/user.dto';
import { JwtService } from '@midwayjs/jwt';

@Controller('/api/user')
export class UserController {
  @Inject()
  jwtService: JwtService;
  @Inject()
  userModel: UserModel;

  /**
   * 休眠函数sleep 调用 await sleep(1500)
   * @param ms
   * @returns
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  @Post('/login')
  async getUser(@Body() userLoginDto: UserLoginDTO) {
    // 用于测试接口请求超过1秒钟
    // await this.sleep(1000)
    const user = await this.userModel.getUserByUsernameAndPassword(
      userLoginDto.username,
      userLoginDto.password
    );
    if (!user) {
      return {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    }
    return {
      code: 200,
      result: 'success',
      message: '登录成功',
      data: {
        token: this.jwtService.signSync({ user }),
      },
    };
  }

  @Get('/add_user')
  async addUser() {
    const user = await this.userModel.addUser();
    return { success: true, message: 'OK', data: user };
  }
}
