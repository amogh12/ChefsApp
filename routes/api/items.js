const express = require('express');
const router = express.Router();
const Item = require("../../models/Item");

router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1}) //sort by date order is descending
        .then(items => res.json(items));
});

module.exports = router;