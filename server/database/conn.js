import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";
const atlas_url="mongodb+srv://admin:bhavya@cluster0.20zlf1m.mongodb.net/?retryWrites=true&w=majority"
async function connect(){

    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect(atlas_url);
    console.log("Database Connected")
    return db;
}

export default connect;