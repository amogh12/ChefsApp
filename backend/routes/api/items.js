const express = require('express');
const router = express.Router();
const Item = require("../../models/Item");


//@route GET api/items
//@access Public
//@desc get all items
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1}) //sort by date order is descending
        .then(items => res.json(items));
});

//@route POST api/items
//@access Public
//@desc post data in the MongoDB
router.post('/', (req, res) => {
    const newItem = new Item ({
        name:req.body.name
    });

    newItem.save().then(item => res.json(item));
});

//@route delete api/items/id
//@access Public
//@desc delete data in the MongoDB
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;