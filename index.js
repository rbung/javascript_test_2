'use strict'

const { endpoints, keys } = require('./data')
const values = Object.values(keys)
const args = process.argv

const getSecretKey = function(endpoint) {
  const index = endpoints.indexOf(endpoint)
  if (index === -1) {
    return 'ERROR'
  }
  return values[index]
}

if (args.length > 2) {
  let endpoints = args.slice(2, args.length)
  for (let i in endpoints) {
    console.log(getSecretKey(endpoints[i]))
  }
} else {
  console.log('you must specify an endpoint')
  process.exit(0)
}
