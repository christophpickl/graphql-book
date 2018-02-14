const express = require('express');
const {graphqlExpress,graphiqlExpress} = require('graphql-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./schema.js');

const GQL_PORT = 4000;
const HTTP_PORT = 4001;

const server = express();
server.use(cors());
server.get('/', function (req, res) {  res.send('Hello World!');});
server.listen(GQL_PORT, () => console.log(`GraphQL server running on http://localhost:${GQL_PORT}`));
server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// server static HTML file
const connect = require('connect');
const serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(HTTP_PORT, function(){
    console.log(`Static HTML server running on http://localhost:${HTTP_PORT}`);
});
