const { MongoClient } = require('mongodb');

const userName = encodeURIComponent('myAtlasDBUser');
const password = encodeURIComponent('My_DataBase_@!@#654');

const dbName = 'MyNode';
let db_1 = {};

const connectdb = async () => {
    try {
        const client = new MongoClient(`mongodb+srv://${userName}:${password}@myatlasclusteredu.xopyxyy.mongodb.net/${dbName}?retryWrites=true&w=majority`,
        { 
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // Use tls options if needed
            tls: true,
            tlsAllowInvalidCertificates: false, // Set to true only for testing purposes
        });

        await client.connect();

        console.log("Connected !!!");
        db_1 = client.db(dbName);
    } catch (error) {
        console.error("Connection error:", error);
    }
};

const getdb = (collectionName) => {
    console.log(db_1);
    return db_1.collection(collectionName);
};

module.exports = { connectdb, getdb };
