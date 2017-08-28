const env = process.env.NODE_ENV || 'development'
const configs = {
  base: {
    env,
    host: 'localhost',
    port: 6324,
  },
  production: {},
  development: {
    mongo: {
      url: 'mongodb://localhost:27017/pei',
    }

  },
  test: {
    port: 6325,
    mongo: {
      url: 'mongodb://localhost:27017/testPei',
    }

  }
}
const config = Object.assign (configs.base, configs[env])

export default config
