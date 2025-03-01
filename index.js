const express = require('express');

// Set up database
const db = require('./config/mongoose');
const port = 8000;
const app = express();

const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(expressLayouts);

// Extract style and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use express router
app.use('/', require('./routes'));

// Global error handler for unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection:", reason);
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.error(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});
