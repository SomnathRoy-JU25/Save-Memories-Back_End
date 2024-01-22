const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
    mongoose
        .connect(MONGODB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        .then(() => {
            console.log(`DB Connection Success`);
        })
        .catch((err) => {
            console.log(`DB Connection Failed`);
            console.error(err);
            process.exit(1);
        });
};

