const mongoose  = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log("database is connected");
    } catch (err) {
        throw new Error('Database not connected.');
    }
};

module.exports = { dbConnection };