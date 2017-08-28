// export *  from './'+ process.env.NODE.ENV

const path = process.env.NODE_ENV || 'development'

module.exports = require ('./' + path + '/index')
// console.log ('./' + process.env.NODE_ENV)

// export default  config