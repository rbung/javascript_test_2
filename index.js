'use strict';

const data = require('./data.js');
const args = process.argv;

if(args.length > 2){
  let endpoints = args.slice(2, args.length);
  for(let i in endpoints){
    console.log(getSecretKey(endpoints[i]));
  };
}
else{
  console.log('you must specify an endpoint');
  process.exit(0);
}

const getSecretKey = function(endpoint){
  //TODO
};






