module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/config/tsconfig.test.json',
      babelConfig: false
    }
  },
  testMatch: ['<rootDir>/src/ts/**/?(*.)test.ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js']
};
