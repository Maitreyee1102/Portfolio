const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Maitreyee1102:glpdCnxB3oaMMeLi@cluster0.onlj4.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

module.exports = connectDB;