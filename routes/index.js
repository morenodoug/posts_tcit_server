const dataBaseConnection = require("../database");
var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    // dataBaseConnection.query('INSERT INTO posts (name, description) VALUES (\'post1\', \'hola\') RETURNING id, name, description', (err, res) => {
    //     console.log(err, res)

    // })
    res.render('index', { title: 'Express' });
});

module.exports = router;