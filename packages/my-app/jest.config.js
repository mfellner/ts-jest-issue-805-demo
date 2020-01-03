module.exports = {
  name: 'my-app',
  displayName: 'my-app',
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      // When the jest cache is empty or when jest is run with `--no-cache`,
      // the option "isolatedModules" must be set to true in order to avoid this error:
      // "TypeError: Unable to require `.d.ts` file."
      //
      // See https://github.com/kulshekhar/ts-jest/issues/805#issuecomment-528935613
      isolatedModules: true,
    },
  },
};
