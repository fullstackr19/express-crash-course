const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

//initialize logger  (middleware)
// app.use(logger);

//body parser middleware
app.use(express.json);
app.use(express.urlencoded({ extended: false }));


//static folder
app.use(express.static(path.join(__dirname, 'public')));

//members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

//______________________________notes_______________________________

// according to API doc the "req" comes first and then "res" objects else TypeError is raised
//middleware is an efficient alternative to static folder