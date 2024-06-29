var jwt = require("jsonwebtoken");
var bcryptjs = require("bcryptjs");
const query = require('../queries/queries1')
const pool = require('../db');

const inputVal = async (req, res, next) => {

    const { id, dietary_preferences, weight, height, health_issue, health_goals } = req.body;

    pool.query(query.addValues, [id, dietary_preferences, weight, height, health_issue, health_goals], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).send("Values Created Successfully");
    });
}

const getDietVal = async (req, res, next) => {
    const { id } = req.params.id
    pool.query(query.getCardValue, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json(result)
    });
}

module.exports = { inputVal, getDietVal }