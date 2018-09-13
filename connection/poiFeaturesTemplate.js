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
                'name': '匿名',
                'reference': {
                    'extended': {
                        'lastModified': (new Date()).toISOString()
                    }
                },
                'geometry': {
                    'points': [
                        {
                            'location': [
                                // Note: LBS give the lat as first, lon as second
                                parseFloat(data[1][1]),
                                parseFloat(data[1][0])
                            ],
                            'icon': poiIcon,
                            'isAccess': true
                        }
                    ]
                },
                'lastModified': (new Date()).toISOString(),
                'isSelectable': true,
                'id': data[ 0 ],
                'isDestination': false
            })
        );

        return { status, features };
    }
};