const request = require('request');

const testUrl = "http://lbsapi-ntg6freshup2-test.azure.mercedes-benz.com/api/v1/notifications";
const notifyData = {
                "category": "Poi",
                "finOrVin": "LE43X8HB6KZ000013",
                "notification": {
                    "actions": [{
                        "showWidArguments":{
                            "restRequest":{
                                "body": null,
                                "path": "/sequence/0",
                                "requestParameter": null
                            } 
                        },
                        "id":1,
                        "text":[{
                            "languageCode": "default",
                            "text": "Open Crypto Car"
                        }]
                    }],
                    "message": [{
                        "primaryText": "You meet one player.",
                        "secondaryText": "from Crypto Car."
                    }]
                },
                "timeDefinition": {
                    "activationEndTime": "2019-06-26 03:00:00",
                    "activationStartTime": "2018-06-26 02:00:00"
                }
            };
            
module.exports = {
    notifyCarsOwner: function(appIdAtHeader, carVinCode, callback){
        request.post({
            headers: {'AppId': appIdAtHeader, 'Content-Type': 'application/json'},
            url: testUrl,
            json: notifyData,
        }, function(error, res, body){
            callback(JSON.stringify(body));
        })
    }
}