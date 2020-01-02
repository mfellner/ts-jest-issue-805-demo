module.exports = {
  name: 'my-app',
  displayName: 'my-app',
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      // https://github.com/kulshekhar/ts-jest/issues/805#issuecomment-528935613
      isolatedModules: false,
    },
  },
};
