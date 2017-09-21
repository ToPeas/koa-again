import mongoose from 'mongoose'
import config from '../../config/index'

console.log (config.mongo)

// const MONGO_URI = 'mongodb://localhost:27017/pei'
mongoose.Promise = global.Promise


mongoose.connect (config.mongo.url, { useMongoClient: true, })

// 连接成功
mongoose.connection.on ('connected', function () {
  console.log ('🌈  Mongoose connection open ')
})

// 连接失败
mongoose.connection.on ('error', function (err) {
  console.log ('Mongoose connection error: ' + err)
})

// 断开连接
mongoose.connection.on ('disconnected', function () {
  console.log ('Mongoose connection disconnected')
})

export default mongoose