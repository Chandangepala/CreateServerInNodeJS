const mongoose = require('mongoose'); //To access lib files
const connectDB = async () =>{

    //To connect with MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            userFindAndModify: false,
            userUnifiedToplog: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
}

module.exports = connectDB; //exporting connectDB constant