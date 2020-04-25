module.exports = {
  verbose: true,
  transform: { '^.+\\.ts$': 'ts-jest' },
  testRegex: '((\\.|/)(test|spec))\\.ts?$',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts', 'js',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: { 'ts-jest': { enableTsDiagnostics: true } },
}
