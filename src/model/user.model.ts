import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Provide()
export class UserModel {

    @InjectEntityModel(UserEntity)
    userRepo: Repository<UserEntity>;
  
    /**
     * 根据用户名和密码获取用户信息
     * @param username {String} 用户名
     * @param password {String} 用户密码
     */
    async getUserByUsernameAndPassword(username, password): Promise<UserEntity> {
      let userInfo = await this.userRepo.findOne({
        where: { username: username, password: password }
      });
      return userInfo;
    }

    /**
     * 添加用户
     */
     async addUser(): Promise<UserEntity> {
        let record = new UserEntity();

        record = this.userRepo.merge(record, {
          username: 'jack',
          password: 'redballoon',
        });

        try {
          const created = await this.userRepo.save(record);

          return created;
        } catch (e) {
          console.log(e);
        }
    }
}