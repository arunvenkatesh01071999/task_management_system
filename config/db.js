const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.Promise = Promise;

    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/crud';

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,     // These options are defaults now in Mongoose
      useUnifiedTopology: true,  // Can be removed in newer versions
    })

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);  // Exit the process if connection fails
  }
};

module.exports = connectDB;

