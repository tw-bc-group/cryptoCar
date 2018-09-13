const buildImage = (url, base64, asset, uiImage) => {
    return {
        "url": url,
        "base64": base64,
        "asset": asset,
        "uiImage": uiImage
    };
}

const myCarEntry_CarouselEntry = {
                                    "voiceMessage": "Provided by ThoughtWorks",
                                    "image": buildImage("http://42.159.6.37:3000/images/carpic6.png", null, null, null), // Notation: This is for show the car image
                                    "title": "My Car",
                                    "starsImageEntryKeepSize": null, 
                                    "starsImageDescriptionKeepSize": null, 
                                    "starsImage": buildImage(null, null, null, null), // Notation: This is for reviewer, which means this is actually shows the star.
                                    "reviews": null,
                                    "subtitle1": "Car property 1",
                                    "subtitle2": "Car property 2",
                                    "imageHeader": "My Crypto Car",
                                    "imageFooter": "Owner"
                                }

const myCarEntry_DetailEntry = {
                                    "type": "locationBased",
                                    "title": "My Car",
                                    "subtitle": "Description 1", 
                                    "headerImage": buildImage("http://42.159.6.37:3000/images/carpic6.png", null, null, null),
                                    "starsImage": buildImage(null, null, null, null), 
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
                                        // "id": "contractId", // Notation: If you just want to show the text in it, you actually don't need to set ID for it.
                                        "type": "oneLineButton",
                                        "image": buildImage(null, null, null, null),
                                        "primaryText": "contract Id ... ",
                                        "actionIcon": null
                                    },
                                    {
                                        // "id": "buttonID02", // Notation: If you just want to show the text in it, you actually don't need to set ID for it.
                                        "type": "twoLineButton",
                                        "image": buildImage(null, null, null, null), 
                                        "primaryText": "Primary Text", 
                                        "secondaryText": "Secondary Text", 
                                        "actionIcon": null, 
                                        "useOneFont": true
                                    },
                                    {
                                        "type": "featureList",
                                        "content":[
                                            {
                                                "title": "Badge 1",
                                                "icon": buildImage(null, null, "navigation/direction_arrow_01", null)
                                            },{
                                                "title": "Badge 2",
                                                "icon": buildImage(null, null, "navigation/direction_arrow_01", null)
                                            },{
                                                "title": "Badge 3",
                                                "icon": buildImage(null, null, "navigation/direction_arrow_01", null)
                                            },{
                                                "title": "Badge 4",
                                                "icon": buildImage(null, null, "navigation/direction_arrow_01", null)
                                            },{
                                                "title": "Badge 5",
                                                "icon": buildImage(null, null, "navigation/direction_arrow_01", null)
                                            },{
                                                "title": "Badge 6",
                                                "icon": buildImage(null, null, "navigation/direction_arrow_01", null)
                                            }
                                        ]
                                    },
                                    {
                                        "type": "pictureGallery",
                                        "content": [
                                            buildImage("http://42.159.6.37:3000/images/carpic6.png", null, null, null),
                                            buildImage("http://42.159.6.37:3000/images/carpic6.png", null, null, null),
                                            buildImage("http://42.159.6.37:3000/images/carpic6.png", null, null, null)
                                        ]
                                    }]
                                }
                                
const myCarEntry = {
                        "id": "carouselEntry01",
                        "carouselEntry": myCarEntry_CarouselEntry,
                        "detailsEntry": myCarEntry_DetailEntry
                    }

module.exports = {
    startApp: function () {
        return ({
            "widgetData": {
                "tabs": [{
                    "title": "Crypto Car",
                    "emptyListText": "No matched car",
                    "providedByText": "Provided by ThoughtWorks", // Notation: If just has one tab, then the provided text will show on the title
                    "providedByText": "Crypto Car",
                    "providedByLogo": null,
                    "leftLogo": null,
                    "entries": [myCarEntry, myCarEntry]
                }]
            }
            // "events": [{
               // Notation: If you want to add any click events for your button, you can just enter the events you want here. 
            // }]
        });
    }
}