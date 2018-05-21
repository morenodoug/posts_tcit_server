var express = require('express');
var router = express.Router();
const dataBaseConnection = require("../database");
const querys = require("../querys");

router.get("/", function(req, res, next) {

    dataBaseConnection.query(querys.ALL_POSTS)
        .then(databaseResponse => {
            res.status(200).json(databaseResponse.rows);
        })
        .catch(e => res.status(500))
});

router.post("/", function(req, res, next) {
    if (typeof req.body.postName === "undefined")
        res.status(400).json({ error: "suministre nombre del post" })

    if (typeof req.body.postDescription === "undefined")
        res.status(400).json({ error: "suministre la descripcion del post" })

    const postInformation = [req.body.postName, req.body.postDescription];
    dataBaseConnection.query(querys.INSERT_POST, postInformation)
        .then(databaseResponse => {
            res.status(201).json(databaseResponse.rows);
        })
        .catch((e) => {
            console.error(e);
            res.status(500).send();
        })
});



module.exports = router;