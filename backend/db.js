const mongoose = require("mongoose");

const mongoURI = '';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log("Connected to MongoDB");
        const collection = mongoose.connection.db.collection("offerletters");
        const data = await collection.find({}).toArray();
        global.offer_letters = data;
  

  
    } 
    
    catch (error) {
        console.error(error);
    }
};

module.exports = connectToMongoDB;
