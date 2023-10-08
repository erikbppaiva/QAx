const {MongoClient} = require('mongodb')
const mongoURI = 'mongodb+srv://qax:xperience@cluster0.fzugohv.mongodb.net/markdbretryWrites=true&w=majority'

const client = new MongoClient(mongoURI)

async function connect(){
    await client.connect()
    return client.db('markdb')
}

async function disconnect(){
    await client.disconnect()
}

module.exports = {connect,disconnect}