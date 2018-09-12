const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static('public_static'));

app.post('/cars', (req, res) => {
    console.log('**** POST /cars ****');
    console.log(req.body);

    truffle_connect.newCar(req.body.account, req.body.carInfo, (event) => {
        if (!event) {
            res.send('failed.');
        }
        res.send('successful.');
    });
});

app.get('/features', (req, res) => {
    console.log('**** GET / POIs ****');
    const { boundingbox, scale, position, heading, VIN } = req.query;
    truffle_connect.feature(boundingbox, scale, position, heading, VIN, (data) => {
        res.send(data);
    });
});

app.get('/details/:id', (req, res) => {
    console.log('**** GET / POI detail ****');
    const carId = req.params.id;
    truffle_connect.detail(carId, (carInfo) => res.send(carInfo));
});

app.listen(port, () => {

    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

    console.log('Express Listening at http://localhost:' + port);
    truffle_connect.start();
});
