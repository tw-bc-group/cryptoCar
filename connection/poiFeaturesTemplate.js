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
                        'lastModified': '2018-07-12T10:02:35.977Z'
                    }
                },
                'geometry': {
                    'points': [
                        {
                            'location': [
                                parseFloat(data[ 1 ][ 1 ]),
                                parseFloat(data[ 1 ][ 0 ])
                            ],
                            'isAccess': true
                        }
                    ]
                },
                'lastModified': '2018-07-06T10:02:33.977Z',
                'isSelectable': true,
                'id': data[ 0 ],
                'isDestination': false
            })
        );

        return { status, features };
    }
};