/* Initialize application requirements. */

const
// Modules.
config = require('./config'),
dependencies = require('./dependencies'),
express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
Sequelize = require('sequelize'),
mysql = require('mysql'),
//mongoose = require('mongoose'),
//firebaseAdmin = require('firebase-admin');

// Route object.
app = express(),
routes = dependencies.routes(),
// Selecting active server & Database.
db = config.database[config.env],
server = config.server[config.env];

/* Opening Database connection. */
// We're using MySQL and Sequelize as an ORM in NodeJS.
const sequelize = new Sequelize(db.name, db.username, db.password, {
    host: db.host,
    dialect: db.connection,
    dialectOptions: {
        useUTC: false //for reading from database
    },
    //logging: false,
    timezone: '+07:00',
    multipleStatements: true,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


/* Enabling application requirements. */
// This may needed by some modules.
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.set('superSecret', config.secret); // secret variable

/* Generating routes. */
// Main logical service processes.
routes(express, app, {
    dependencies: dependencies,
    sequelize: {
        parent: Sequelize,
        child: sequelize
    },
    config: config,
});

/* Listening the server. */
app.listen(server.port, server.host, function()
{
    console.log('Server running at http://' + server.host + ':' + server.port);
});
