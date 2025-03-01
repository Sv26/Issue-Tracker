const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://shubhamvermaoutstanding:Shubh@123@cluster0.9tofg.mongodb.net/'
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('-->Connected to Database :: MongoDB<--');
});

module.export = db;
