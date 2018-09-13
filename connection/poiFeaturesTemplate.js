const _ = require('lodash');
const poiIcon = "https://lbsapi-ntg6freshup2-test.azure.mercedes-benz.com/api/images/cryptocar/car%20logo2.png";
module.exports = {
    poiIcon,
    buildFeatures: function (featuresData) {
        const status = {
            'timestamp': new Date(),
            'message': 'ok',
            'code': 0
        };

        const features = _.map(
            featuresData,
            (data) => ({
                "id": data[ 0 ],
                "geometry": {
                    "points": [
                        {
                            "location": [
                                parseFloat(data[1][1]),
                                parseFloat(data[1][0])
                            ],
                            "icon": poiIcon,
                            "isAccess": true
                        }
                    ]
                },
                "lastModified": (new Date()).toISOString(),
                "name": "CryptoCar",
                "address": {
                    "street": "CryptoCar"
                },
                "listIconSet": {
                    "url": poiIcon,
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
            })
        );

        return { status, features };
    }
};