const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://shubham:Shubh@cluster0.jitqu.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('--> Connected to Database :: MongoDB <--'))
.catch((err) => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
module.exports = db;  // ✅ Fixed module.exports
