const express = require('express');
const { getHome, getUsers } = require('../controllers');

const router = express.Router();

router.get('/', getUsers);
router.get('/home', getHome);

module.exports = router;