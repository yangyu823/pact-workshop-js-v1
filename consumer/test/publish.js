const pact = require('@pact-foundation/pact-node')
const path = require('path')
const gitHash = require('child_process')
    .execSync('git rev-parse --short HEAD')
    .toString().trim();
const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, '../../pacts/')],
  pactBroker: 'http://35.244.122.147/',
  pactBrokerUsername: 'CSPUsr2',
  pactBrokerPassword: 'Password1',
  tags: ['prod', 'test'],
  consumerVersion: gitHash
}

pact
  .publishPacts(opts)
  .then(() => {
    console.log('Pact contract publishing complete!')
    console.log('')
    console.log('Head over to http://35.244.122.147/ and login with')
    console.log('=> Username: CSPUsr2')
    console.log('=> Password: Password1')
    console.log('to see your published contracts.')
  })
  .catch(e => {
    console.log('Pact contract publishing failed: ', e)
  })
