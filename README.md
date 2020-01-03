# Demo for ts-jest #805

See https://github.com/kulshekhar/ts-jest/issues/805

## How to use

### To reproduce the error

```sh
yarn install --frozen-lockfile
cd packages/my-app/
yarn test --no-cache
```

Output:

```shell
$ yarn test --no-cache
yarn run v1.21.1
$ jest --no-cache
 FAIL   my-app  ./main.test.ts
  ● Test suite failed to run

    TypeError: Unable to require `.d.ts` file.
    This is usually the result of a faulty configuration or import. Make sure there is a `.js`, `.json` or another executable extension available alongside `index.ts`.

      at getOutput (../../node_modules/ts-jest/dist/compiler.js:165:23)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.111s
Ran all test suites.
error Command failed with exit code 1.
info Visit
```

The error can also be reproduced by running all the test projects from the root directory.

### To work around the error

## isolatedModules

Set `isolatedModules` to `true` in `packages/my-app/jest.config.js`.

## preserveSymlinks

Set `preserveSymlinks` to `true` in `packages/my-app/tsconfig.json`.
