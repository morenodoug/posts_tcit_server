const config = require("./config");

const { Pool, Client } = require('pg');
module.exports = new Pool(config.databaseParameters);