const express = require('express');
const fileupload = require('express-fileupload');
const adminroutes = require('./routes/admin_routes');
const userroutes = require('./routes/user_routes');
const cors = require('cors');
const path = require('path');

const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Views folder inside "server/views"

// Middleware
app.use(fileupload());
app.use('/images', express.static('public/images'));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files like images
app.use(cors({ origin: 'http://localhost:5173' })); // Allow frontend access
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json());

// Routes
app.use('/', userroutes);
app.use('/admin', adminroutes);

// Start server
app.listen(1000, () => {
  console.log('Server running on http://localhost:1000');
});
