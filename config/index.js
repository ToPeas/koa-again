// export *  from './'+ process.env.NODE.ENV


module.exports = require ('./' + process.env.NODE_ENV + '/index')
// console.log ('./' + process.env.NODE_ENV)

// export default  config