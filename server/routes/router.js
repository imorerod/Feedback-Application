const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
    pool.query(queryString).
        then((response) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error getting data from database', error);
            res.sendStatus(500);
        });
})

module.exports = router;