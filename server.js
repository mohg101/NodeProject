const express = require('express');
const server = express();
const path = require('path');

const { getError } = require('./controllers/errorController');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

server.use(express.static('public'));

server.set('view engine','ejs');
server.set('views','views');

server.use(userRoutes);
server.use(adminRoutes);

server.use('/',getError);

server.listen(4000);



//scripts -> dev
//npm run dev