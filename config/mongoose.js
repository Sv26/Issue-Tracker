const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://shubhamverma:Shubham@cluster0.wr8usha.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('-->Connected to Database :: MongoDB<--');
});

module.export = db;
