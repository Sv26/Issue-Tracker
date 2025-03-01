const Project = require('../models/project');

module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue/Bug Tracker | Home',
      projects,
    });
  } catch (error) {  // Use `error` instead of `err`
    console.error('Error in home controller:', error);
    res.status(500).send('Internal Server Error'); // Send a proper response
  }
};
