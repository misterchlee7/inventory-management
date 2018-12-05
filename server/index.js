const fs = require('fs');
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./modules/router');
const config = require('./modules/config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true });

// Express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routers

app.use('/', router);
app.use(( err, req, res, next ) => {
	res.locals.error = err;
	if (err.status >= 100 && err.status < 600)
		res.status(err.status);
	else
		res.status(500);
	res.send('error');
});

const NODE_ENV = process.env.NODE_ENV || config.NODE_ENV;
if (NODE_ENV === 'production') {
    app.use(express.static('../dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
    });
} 

// Port
const PORT = config.HTTP_SERVER_PORT;

const httpServer = http.createServer(app);
httpServer.listen(PORT);