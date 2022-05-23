const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

router.use((req, res) => {
    res.status(404);
    res.json({
        error: 'Page not found',
    });
});