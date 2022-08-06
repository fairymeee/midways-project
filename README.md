# 测试结果

## 用户登录接口测试结果

### 登录成功

![login_success](https://user-images.githubusercontent.com/38686208/183231779-06e6bcef-c996-465d-a624-60b116bc423a.png)

### 登录失败

![login_error](https://user-images.githubusercontent.com/38686208/183231785-983a0138-6522-4405-adbe-330dcc677f05.png)


## 单元测试运行结果

### 正常结果

```bash
 PS D:\dell\midway-project> npm run test                                

> my-midway-project@1.0.0 test D:\dell\midway-project
> midway-bin test -f test/controller/user.test.ts --ts

Testing test/controller/user.test.ts
  console.log
    query: PRAGMA foreign_keys = OFF

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: BEGIN TRANSACTION

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: SELECT null as database, null as schema, * FROM "sqlite_master" WHERE "type" = 'table' AND "name" IN ('user_entity')

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: SELECT null as database, null as schema, * FROM "sqlite_master" WHERE "type" = 'index' AND "tbl_name" IN ('user_entity')

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: PRAGMA table_xinfo("user_entity")

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: PRAGMA index_list("user_entity")

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: PRAGMA foreign_key_list("user_entity")

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" = 'typeorm_metadata'

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: COMMIT

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: PRAGMA foreign_keys = ON

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: SELECT "UserEntity"."id" AS "UserEntity_id", "UserEntity"."username" AS "UserEntity_username", "UserEntity"."password" AS "UserEntity_password" FROM "user_entity" "UserEntity" WHERE ("UserEntity"."username" = ? AND "UserEntity"."password" = ?) LIMIT 1 -- PARAMETERS: ["jack","redballoon"]

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

2022-08-06 11:23:07,471 INFO 15344 [-/::ffff:127.0.0.1/-/30ms POST /api/user/login] Report in "src/middleware/report.middleware.ts", rt = 14ms
  console.log
    query: SELECT "UserEntity"."id" AS "UserEntity_id", "UserEntity"."username" AS "UserEntity_username", "UserEntity"."password" AS "UserEntity_password" FROM "user_entity" "UserEntity" WHERE ("UserEntity"."username" = ? AND "UserEntity"."password" = ?) LIMIT 1 -- PARAMETERS: ["xxx","xxxx"]

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

 PASS  test/controller/user.test.ts
  test/controller/user.test.ts
    √ should POST /api/user/login (48 ms)
    √ should POST /api/user/login (17 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.938 s, estimated 4 s
Ran all test suites related to files matching /test\\controller\\user.test.ts|test/i.
```

### 异常结果

```bash
PS D:\dell\midway-project> npm run test

> my-midway-project@1.0.0 test D:\dell\midway-project 
> midway-bin test -f test/controller/user.test.ts --ts

Testing test/controller/user.test.ts
  console.log
    query: PRAGMA foreign_keys = OFF

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: BEGIN TRANSACTION

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: SELECT null as database, null as schema, * FROM "sqlite_master" WHERE "type" = 'table' AND "name" IN ('user_entity')

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: SELECT null as database, null as schema, * FROM "sqlite_master" WHERE "type" = 'index' AND "tbl_name" IN ('user_entity')

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: PRAGMA table_xinfo("user_entity")

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: PRAGMA index_list("user_entity")

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: PRAGMA foreign_key_list("user_entity")

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" = 'typeorm_metadata'

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: COMMIT

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: PRAGMA foreign_keys = ON

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

  console.log
    query: SELECT "UserEntity"."id" AS "UserEntity_id", "UserEntity"."username" AS "UserEntity_username", "UserEntity"."password" AS "UserEntity_password" FROM "user_entity" "UserEntity" WHERE ("UserEntity"."username" = ? AND "UserEntity"."password" = ?) LIMIT 1 -- PARAMETERS: ["jack","redballoon"]

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)

2022-08-06 11:31:03,676 INFO 26136 [-/::ffff:127.0.0.1/-/1044ms POST /api/user/login] Report in "src/middleware/report.middleware.ts", rt = 1027ms
 FAIL  test/controller/user.test.ts (6.895 s)
  test/controller/user.test.ts
    × should POST /api/user/login (1063 ms)
    × should POST /api/user/login (1021 ms)

  ● test/controller/user.test.ts › should POST /api/user/login

    expect(received).toBeLessThanOrEqual(expected)

    Expected: <= 1000
    Received:    1060

      31 |
      32 |     // use expect by jest
    > 33 |     expect(time).toBeLessThanOrEqual(1000);
         |                  ^
      34 |     expect(result.body.code).toBe(200);
      35 |     expect(result.body.result).toBe('success');
      36 |   });

      at Object.<anonymous> (test/controller/user.test.ts:33:18)

  ● test/controller/user.test.ts › should POST /api/user/login

    expect(received).toBeLessThanOrEqual(expected)

    Expected: <= 1000
    Received:    1020

      44 |
      45 |     // use expect by jest
    > 46 |     expect(time).toBeLessThanOrEqual(1000);
         |                  ^
      47 |     expect(result.body.code).toBe(400);
      48 |     expect(result.body.result).toBe('error');
      49 |   });

      at Object.<anonymous> (test/controller/user.test.ts:46:18)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 total
Snapshots:   0 total
Time:        7 s
Ran all test suites related to files matching /test\\controller\\user.test.ts|test/i.
  console.log
    query: SELECT "UserEntity"."id" AS "UserEntity_id", "UserEntity"."username" AS "UserEntity_username", "UserEntity"."password" AS "UserEntity_password" FROM "user_entity" "UserEntity" WHERE ("UserEntity"."username" = ? AND "UserEntity"."password" = ?) LIMIT 1 -- PARAMETERS: ["xxx","xxxx"]

      at Function.logInfo (node_modules/src/platform/PlatformTools.ts:229:17)
```
