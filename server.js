const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const notify = require('./connection/notify');
const bodyParser = require('body-parser');
const carDetailTemplate = require('./connection/carDetailTemplate');


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

app.post('/notify', (req, res) => {
    console.log('**** POST /notify ****');
    notify.notifyCarsOwner("CRYPTOCAR", "LE43X8HB6KZ000013", (requestBody) => res.send(requestBody));
});

app.get('/features', (req, res) => {
    console.log('**** GET / POIs ****');

    const { boundingbox, scale, position} = req.query;
    console.log(req.query);
    console.log(position);
    // const { boundingbox, scale, position, heading, VIN } = req.query;
    // console.log(position);
    // truffle_connect.features(boundingbox, scale, position, heading, VIN, (data) => {
    //     res.send(data);
    // });


    const result =
        {
            "features": [
                {
                    "id": "66666666",
                    "geometry": {
                        "points": [
                            {
                                "location": [
                                    39.959683,
                                    116.50709
                                ],
                                "icon": "https://lbsapi-ntg6freshup2-test.azure.mercedes-benz.com/api/images/icons/Other/automotive.png",
                                "isAccess": true
                            }
                        ]
                    },
                    "lastModified": (new Date()).toISOString(),
                    "name": "CryptoCar",
                    "mapFeatureType": "restaurant",
                    "address": {
                        "street": "CryptoCar"
                    },
                    "listIconSet": {
                        "url": "https://lbsapi-ntg6freshup2-test.azure.mercedes-benz.com/api/images/icons/Other/automotive.png",
                        "lastModified": (new Date()).toISOString()
                    },
                    "reference": {
                        "extended": {
                            "lastModified": (new Date()).toISOString()
                        }
                    },
                    "mapFeatureType": "lbs-aop",
                    "isDestination": true,
                    "isSelectable": true
                },
                {
                    "id": "77777777",
                    "geometry": {
                        "points": [
                            {
                                "location": [
                                    39.963049,
                                    116.504874
                                ],
                                "icon": "https://lbsapi-ntg6freshup2-test.azure.mercedes-benz.com/api/images/icons/Other/automotive.png",
                                "isAccess": true
                            }
                        ]
                    },
                    "lastModified": (new Date()).toISOString(),
                    "name": "CryptoCar",
                    "mapFeatureType": "restaurant",
                    "address": {
                        "street": "CryptoCar"
                    },
                    "listIconSet": {
                        "url": "https://lbsapi-ntg6freshup2-test.azure.mercedes-benz.com/api/images/icons/Other/automotive.png",
                        "lastModified": (new Date()).toISOString()
                    },
                    "reference": {
                        "extended": {
                            "lastModified": (new Date()).toISOString()
                        }
                    },
                    "mapFeatureType": "lbs-aop",
                    "isDestination": true,
                    "isSelectable": true
                },
                {
                    "id": "888888",
                    "geometry": {
                        "points": [
                            {
                                "location": [
                                    39.9087,
                                    116.3975
                                ],
                                "icon": "https://lbsapi-ntg6freshup2-test.azure.mercedes-benz.com/api/images/icons/Other/automotive.png",
                                "isAccess": true
                            }
                        ]
                    },
                    "lastModified": (new Date()).toISOString(),
                    "name": "CryptoCar",
                    "mapFeatureType": "restaurant",
                    "address": {
                        "street": "CryptoCar"
                    },
                    "listIconSet": {
                        "url": "https://lbsapi-ntg6freshup2-test.azure.mercedes-benz.com/api/images/icons/Other/automotive.png",
                        "lastModified": (new Date()).toISOString()
                    },
                    "reference": {
                        "extended": {
                            "lastModified": (new Date()).toISOString()
                        }
                    },
                    "mapFeatureType": "lbs-aop",
                    "isDestination": true,
                    "isSelectable": true
                }
            ]
        };

    res.send(result)

});

app.get('/details/:id', (req, res) => {
    console.log('**** GET / POI detail ****');
    const carId = req.params.id;
    console.log(carId);
    // truffle_connect.detail(carId, (carInfo) => res.send(carInfo));
    res.send(carDetailTemplate.buildCarDetail('tokenID123', 'bcm', '2222222'))
});

app.listen(port, () => {
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

    console.log('Express Listening at http://localhost:' + port);
    truffle_connect.start();
});
