const redis = require('redis');
const gju = require('geojson-utils');

const client = redis.createClient(6379, 'localhost');
const KEY_NAME = 'cars';


module.exports = {
    getPoiInRange: (lon0, lat0, lon1, lat1, VIN, callback) => {
        const centerLon = (lon0 + lon1) / 2;
        const centerLat = (lat0 + lat1) / 2;
        console.log(centerLon, centerLat);
        client.georadius(KEY_NAME, centerLon, centerLat, 500, 'km', 'WITHCOORD', 'ASC', (error, pois) => {
            if (error) {
                console.log(error);
            }
            callback(pois);
        });
    },
    savePosition: (selfLon, selfLat, VIN) => {
        if (!VIN) {
            VIN = 0;
        }
        client.geoadd(KEY_NAME, selfLon, selfLat, VIN);
    },
    calcMovedDistance: (VIN, selfLon, selfLat, callback) => {
        client.geopos(KEY_NAME, VIN, (error, value) => {
            if(!value){
                return;
            }

            const [ latestLon, latestLat ] = value;
            const distance = gju.pointDistance(
                { type: 'point', coordinates: [ latestLon, latestLat ] },
                { type: 'point', coordinates: [ selfLon, selfLat ] });
            callback(distance);
        });
    },
    meetingCar: (selfLon, selfLat, callback) => {
        client.georadius(KEY_NAME, selfLon, selfLat, 1, 'km', 'WITHCOORD', 'ASC', 'COUNT', 1, (error, poi) => {
            if (error) {
                console.log(error);
            }
            callback(poi);
        })
    }
};