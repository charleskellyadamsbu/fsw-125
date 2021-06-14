const express = require('express');

const app = express();

app.get('/places', (req, res) => {
    res.json(
        [{
            "location": "Phoenix"
        }, {
            "location": "New York City"
        }, {
            "location": "Miami"
        }]
    )
});

app.get('/drinks', (req, res) => {
    res.json(
        [{
            "drink": "Red Bull"
        }, {
            "drink": "Coffee"
        }, {
            "drink": "Tea"
        }]
    )
});

app.get('/games', (req, res) => {
    res.json(
        [{
            "game": "Call of Duty"
        }, {
            "game": "Minecraft"
        }, {
            "game": "Apex Legends"
        }]
    )
});

app.listen('3000', () => console.log("Listening on port 3000"));