module.exports = {
    startApp: function () {
        return ({
            "widgetData": {
                "tabs": [{
                    "title": "Crypto Car",
                    "emptyListText": "No matched car",
                    "providedByText": "Provided by ThoughtWorks",
                    "providedByLogo": null,
                    "leftLogo": null,
                    "entries": [{
                        "id": "carouselEntry01",
                        "carouselEntry": {
                            "voiceMessage": "Provided by ThoughtWorks",
                            "image": {
                                "base64": null,
                                "url": "http://42.159.6.37:3000/images/carpic6.png",
                                "asset": null
                            }, //This is for show the car image
                            "title": "My Car",
                            "starsImageEntryKeepSize": null, 
                            "starsImageDescriptionKeepSize": null, 
                            "starsImage": {
                                "url": null,
                                "uiImage": "53_mercedes_me/53_restaurant_recommendation_star_icons/dianping_stars_4",
                                "base64": null,
                                "asset": null
                            }, //This is for reviewer
                            "reviews": null,
                            "subtitle1": "Car property 1",
                            "subtitle2": "Car property 2",
                            "imageHeader": "My Crypto Car",
                            "imageFooter": "Owner"
                        },
                        "detailsEntry": {
                            "type": "locationBased",
                            "title": "My Car",
                            "subtitle": "Description 1", 
                            "headerImage": {
                                "base64": null,
                                "url": "http://42.159.6.37:3000/images/carpic6.png",
                                "asset": null
                            }, //This is for showing the car image 
                            "starsImage": null, 
                            "voiceMessage": "Provided by ThoughtWorks", 
                            // "favouritesButton": {
                                // "id": "favouritesButton_00", 
                                // "icon": {}, 
                                // "deletePopup": {
                                //     "message": "Do you want to delete this?",
                                //     "yesButton": {
                                //         "text": "Yes"
                                //     },
                                //     "noButton": {
                                //         "text": "No"
                                //     } 
                                // }
                            // },
                            "favouritesButton": null,
                            "rows": [{
                                "id": "contractId",
                                "type": "oneLineButton",
                                "image": null,
                                "primaryText": "contract Id ... ",
                                "actionIcon": null
                            },
                            {
                                "id": "buttonID02",
                                "type": "twoLineButton",
                                "image": null, 
                                "primaryText": "07031 3069899", 
                                "secondaryText": "Chaoyang Beijing", 
                                "actionIcon": null, 
                                "useOneFont": true
                            },
                            {
                                "type": "featureList",
                                "content":[
                                    {
                                        "title": "Badge 1",
                                        "icon":{
                                            "url": null,
                                            "uiImage": null,
                                            "base64": null,
                                            "asset": "navigation/direction_arrow_01"
                                        }
                                    },{
                                        "title": "Badge 2",
                                        "icon":{
                                            "url": null,
                                            "uiImage": null,
                                            "base64": null,
                                            "asset": "navigation/direction_arrow_01"
                                        }
                                    },{
                                        "title": "Badge 3",
                                        "icon":{
                                            "url": null,
                                            "uiImage": null,
                                            "base64": null,
                                            "asset": "navigation/direction_arrow_01"
                                        }
                                    },{
                                        "title": "Badge 4",
                                        "icon":{
                                            "url": null,
                                            "uiImage": null,
                                            "base64": null,
                                            "asset": "navigation/direction_arrow_01"
                                        }
                                    }
                                ]
                            },
                            {
                                "type": "pictureGallery",
                                "content": [
                                    {
                                        "base64": null,
                                        "url": "http://42.159.6.37:3000/images/carpic6.png",
                                        "asset": null
                                     }, // Image for gallery
                                     {
                                        "base64": null,
                                        "url": "http://42.159.6.37:3000/images/carpic6.png",
                                        "asset": null
                                     },
                                     {
                                        "base64": null,
                                        "url": "http://42.159.6.37:3000/images/carpic6.png",
                                        "asset": null
                                     }
                                ]
                            }]
                        }
                    }]
                }]
            }
            // "events": [{
                
            // }]
        });
    }
}