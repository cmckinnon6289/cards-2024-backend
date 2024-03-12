const mongoose = require('mongoose');

// Replace <password> with your MongoDB Atlas password
const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mffezrs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

  const connectToMongoDB = async (uri) => {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
    }
  };

  connectToMongoDB(mongoURI)
  
module.exports = connectToMongoDB;