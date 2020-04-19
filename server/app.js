import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server';

import typeDefs from './apollo/schema';
import resolvers from './apollo/resolver';

const cors = require('cors');
const app = express();

app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

// make sure to replace my db string & creds with your own
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-6lefm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true ,useUnifiedTopology: true }
).then(() => {

    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
    
}).catch(err => {
    console.log(err);
});