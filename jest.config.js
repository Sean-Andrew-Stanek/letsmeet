//Run with 
//npm run test --coverage --watchAll=false

/** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['./src/**/*.js'],
  };
  
  module.exports = config;