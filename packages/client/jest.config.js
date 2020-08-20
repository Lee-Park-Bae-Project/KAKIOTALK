module.exports = {
  globals: { 'ts-jest': {
    tsConfig: 'tsconfig.json',
    diagnostics: true,
  } },
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
  transformIgnorePatterns: ['./node_modules/'],
  preset: 'ts-jest',
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  testMatch: ['**/test/**/*.test.(ts|tsx)'],
  testEnvironment: 'node',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: [
    '<rootDir>src/setupTests.ts',
  ],
}
