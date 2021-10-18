module.exports = (() => {
    const index = require('express').Router();

    index.get('/', function (req, res) {
        res.status(200).json({ 'success': true });
    });

    return index;
})();