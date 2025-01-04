const express =  require('express');
const app = express();

app.get('/restaurants', (req, res) => {
    res.status(200).json([
        { name: 'Pizza Place' },
        { name: 'Burger Joint' }
    ]);
});

module.exports = app;