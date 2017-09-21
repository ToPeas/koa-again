const env = process.env.NODE_ENV || 'development'

const mongoHost = process.env.MONGO_HOST
const mongoName = process.env.MONGO_NAME
const redisHost = process.env.REDIS_HOST
const redisPort = process.env.REDIS_PORT

console.log(env)
const configs = {
  base: {
    port: 6324,
    mongo: {
      url: `mongodb://127.0.0.1/myKoa`
    },
    redis: {
      host: '127.0.0.1',
      port: 6379
    }
  },
  production: {
    mongo: {
      url: `mongodb://${mongoHost}/${mongoName}`
    },
    redis: {
      port: redisPort,
      host: redisHost
    }
  },
  development: {
    mongo: {
      url: `mongodb://127.0.0.1/myKoa`
    }
  },
  test: {
    mongo: {
      url: 'mongodb://127.0.0.1/testPei'
    }
  }
}
const config = Object.assign(configs.base, configs[env])

export default config
