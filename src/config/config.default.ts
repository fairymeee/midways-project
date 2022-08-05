import { MidwayConfig } from '@midwayjs/core';
import { UserEntity } from '../entity/user.entity'
import { join } from 'path';

export default {
  typeorm: {
    dataSource: {
      default: {
        type: 'sqlite',
        database: join(__dirname, '../../test.sqlite'),
        synchronize: true,
        logging: true,
        
        // 配置实体模型
        entities: [UserEntity],
      }
    }
  },
  jwt: {
    secret: 'midways', // fs.readFileSync('xxxxx.key')
    expiresIn: '2d', // https://github.com/vercel/ms
  },
  // use for cookie sign key, should change to your own and keep security
  keys: '1659688209225_9237',
  koa: {
    port: 7001,
  },
} as MidwayConfig;
