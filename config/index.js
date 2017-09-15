const env = process.env.NODE_ENV || 'development'

const mongoHost = process.env.MONGO_HOST;
const mongoName = process.env.MONGO_NAME;

const configs = {
  base: {
    env,
    host: 'localhost',
    port: 6324,
  },
  production: {},
  development: {
    mongo: {
      url: `mongodb://${mongoHost}/${mongoName}`,
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
