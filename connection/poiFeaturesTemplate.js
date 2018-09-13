const _ = require('lodash');

module.exports = {
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
                                parseFloat(data[1][0]),
                                parseFloat(data[1][1])
                            ],
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