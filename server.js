let express = require('express');
let {graphqlExpress,graphiqlExpress} = require('graphql-server-express');
let bodyParser = require('body-parser');
let schema = require('./schema.js');

const PORT = 4000;
const server = express();

server.get('/', function (req, res) {  res.send('Hello World!');});
server.listen(PORT, () => console.log(`GraphQL on port ${PORT}`));
server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
