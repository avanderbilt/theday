const configuration = {
  app: {                      // If this will be a service.
    port: 8000
  },
  host: {                     // If this will consume a service.
    hostname: 'localhost',
    port: 8000,
  },
  db: {                       // If this will use a MongoDB database.
    host: 'localhost',
    port: 27017,
    name: 'mydatabase'
  }
}

module.exports = configuration;