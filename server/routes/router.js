const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
    pool.query(queryString)
        .then((response) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error getting data from database', error);
            res.sendStatus(500);
        });
})

router.post('/', (req, res) => {
    const surveyObject = req.body;


    const queryString = `INSERT INTO "feedback" (
                            "feeling",
                            "understanding",
                            "support",
                            "comments")
                            VALUES ($1, $2, $3, $4);`;
    console.log(surveyObject);


    pool.query(queryString, [
        surveyObject.feedback,
        surveyObject.understanding,
        surveyObject.support,
        surveyObject.comments
        ])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error saving to DB: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;