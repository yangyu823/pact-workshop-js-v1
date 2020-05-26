const pact = require('@pact-foundation/pact-node')
const path = require('path')
const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, '../../pacts/')],
  pactBroker: 'http://35.244.125.151/',
  pactBrokerUsername: 'CSPUsr2',
  pactBrokerPassword: 'Password1',
  tags: ['prod', 'test'],
  consumerVersion:
    '1.0.' +
    (process.env.USER ? process.env.USER : Math.floor(new Date() / 1000)),
}

pact
  .publishPacts(opts)
  .then(() => {
    console.log('Pact contract publishing complete!')
    console.log('')
    console.log('')
    console.log('Head over to http://35.244.125.151/ and login with')
    console.log('=> Username: CSPUsr2')
    console.log('=> Password: Password1')
    console.log('to see your published contracts.')
  })
  .catch(e => {
    console.log('Pact contract publishing failed: ', e)
  })
