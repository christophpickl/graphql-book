# graphql-book

See: https://api-university.com/books/graphql-api-design/tutorial/

## Setup

* Install npm
    * Check installation `npm -v`
        * If not found: `brew install npm`
        * If version printed: `brew upgrade npm`
* Install node.js
    * Check installation `node -v`
        * If not found: `brew install node`
        * If version printed: `brew upgrade node`
* Download the tutorial sources, go to the directory and fetch the dependencies:
    * `npm install -save graphql express graphql-server-express body-parser graphql-tools graphql-subscriptions subscriptions-transport-ws`

## Run

In order to run the server, simply execute `npm start` which should print out the following:


    > graphql-tutorial@1.0.0 start /Users/cpickl/Dev/graphql-book
    > node ./server.js

    GraphQL on port 4000

The address http://localhost:4000/ should return a simple "Hello World!",
whereas the well-known GraphiQL is available at: http://localhost:4000/graphiql

Run the following sample query:

    query readBooks {
      books {
        id
        title
        authors {
          id
          name
        }
      }
    }
