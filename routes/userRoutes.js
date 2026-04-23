const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
router.get('/public', (req, res) => {
    res.send("Public Route");
});
router.get('/protected', auth, (req, res) => {
    res.send("Protected Route - Access Granted");
});
module.exports = router;