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
  },
  boxenOptions: {             // If this is a console app using boxen.
    borderColor: 'gray',
    borderStyle: 'round',
    padding: 1
  }
}

module.exports = configuration;