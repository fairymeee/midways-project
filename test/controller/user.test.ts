import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework, Application } from '@midwayjs/koa';

describe('test/controller/user.test.ts', () => {
  let app: Application;

  beforeAll(async () => {
    // 只创建一次 app，可以复用
    try {
      // 由于Jest在BeforeAll阶段的error会忽略，所以需要包一层catch
      // refs: https://github.com/facebook/jest/issues/8688
      app = await createApp<Framework>();
    } catch(err) {
        console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    // close app
    await close(app);
  });


  it('should POST /api/user/login', async () => {
    const startTime = Date.now();
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .send({ username: "jack",​  password: "redballoon" });
      const time = Date.now() - startTime;

    // use expect by jest
    expect(time).toBeLessThanOrEqual(1000);
    expect(result.body.code).toBe(200);
    expect(result.body.result).toBe('success');
  });

  it('should POST /api/user/login', async () => {
    const startTime = Date.now();
    const result = await createHttpRequest(app)
      .post('/api/user/login')
      .send({ username: "xxx",​  password: "xxxx" });
    const time = Date.now() - startTime;

    // use expect by jest
    expect(time).toBeLessThanOrEqual(1000);
    expect(result.body.code).toBe(400);
    expect(result.body.result).toBe('error');
  });
});
