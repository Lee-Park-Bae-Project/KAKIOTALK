module.exports = { apps: [
  {
    name: '@kakio/server',
    script: './dist/bin/www.js',
    watch: '.',
    env: { NODE_ENV: 'development' },
    env_production: { NODE_ENV: 'production' },

  }] }
