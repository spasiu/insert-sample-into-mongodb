const mongodb = require("mongodb");

// URL for DB
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'Geo-Threads';

// sample data to insert
const users = [{ name: 'jerry', _id: 1 }, { name: 'emile', _id: 2 }];
const threads = [{ authorId: 1, comments: [] }, { authorId: 2, comments: [] }];

// connect to DB and insert sample data
mongodb.MongoClient.connect(MONGO_URL)
    .then(client => Promise.all([
        client.db(DB_NAME).collection('Users').insertMany(users),
        client.db(DB_NAME).collection('Threads').insertMany(threads)
    ]))
    .then(() => {
        console.log('SUCCESS: sample data inserted.');
        process.exit(0);
    })
    .catch(error => {
        console.log('ERROR:', error);
        process.exit(0);
    });
