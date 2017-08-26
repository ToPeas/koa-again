import glob from 'glob'

export default function (path) {
  return new Promise ((resolve) => {
    const arr = []
    glob (`${path}/*.js`, {
      ignore: '*/index.js'
    }, (err, files) => {
      if (err) {
        return reject (err)
      }
      files.forEach (async (file) => {
        const route = await require (file)
        arr.push (route)
      }
      return resolve (arr)
    })
  })
}