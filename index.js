const mongoose = require("mongoose");

const config = require("./config.js");
const { MONGO_URI } = config;

async function connectMongoDB() {
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        .then(() => console.log(`MongoDB ${MONGO_URI} Connected`))
        .catch((err) => console.error(err));
}

await connectMongoDB();

require("./read_mongoose");
