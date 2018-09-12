const redis = require('redis');

const client = redis.createClient(6379, 'localhost');
const KEY_NAME = 'cars';


module.exports = {
    getPoiInRange: (longitude0, latitude0, longitude1, latitude1, VIN, callback) => {
        const centerLongitude = (longitude0 + longitude1) / 2;
        const centerLatitude = (latitude0 + latitude1) / 2;
        console.log(centerLongitude, centerLatitude);
        client.georadius(KEY_NAME, centerLongitude, centerLatitude, 500, 'km', 'WITHCOORD', 'ASC', (error, pois) => {
            if(error){
                console.log(error);
            }
            callback(pois);
        });
    },
    savePosition: (selfLongitude, selfLatitude, VIN) => {
        if (!VIN) {
            VIN = 0;
        }
        client.geoadd(KEY_NAME, selfLongitude, selfLatitude, VIN);
    }
};