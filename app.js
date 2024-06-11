const express = require('express');
const bodyParser = require('body-parser');
const { calculateFlightPath } = require('./flightService');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const {flights} = req.body;
    if (!Array.isArray(flights) || flights.some(flight => flight.length !== 2)) {
        return res.status(400).send({ error: 'Invalid input format' });
    }

    try {
        const flightPath = calculateFlightPath(flights);
        res.status(200).send(flightPath);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Flight path tracker service is running on port ${PORT}`);
});
