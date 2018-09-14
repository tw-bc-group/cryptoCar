const buildOneLineButton = (elementId, iconImage, primaryText, actionIcon) =>  {
    return {
                "id": elementId,
                "type": "oneLineButton",
                "image": iconImage,
                "primaryText": primaryText,
                "actionIcon": actionIcon
            };
}

const buildTwoLineButton = (image, primaryText, secondaryText, actionIcon, useOneFont) => {
    return {
                "type": "twoLineButton",
                "image": image, 
                "primaryText": primaryText, 
                "secondaryText": secondaryText, 
                "actionIcon": actionIcon, 
                "useOneFont": useOneFont
            };
}

const buildFeatureList = (contents) => {
    return {
                "type": "featureList",
                "content": contents
            }
}

const buildFeatureListContent = (title, iconImage) => {
    return {
                "title": title,
                "icon": iconImage
            }
}

const buildGallery = (contents) => {
    return {
                "type": "pictureGallery",
                "content": contents
            }
}

const buildImage = (url, base64, asset, uiImage) => {
    return {
        "url": url,
        "base64": base64,
        "asset": asset,
        "uiImage": uiImage
    };
}

const create_MyCarEntry_CarouselEntry = (mainImage, title, starsImage, subtitle1, subtitle2, imageHeader, imageFooter) => {
    return {
                "voiceMessage": "Provided by ThoughtWorks",
                "image": mainImage,
                "title": title,
                "starsImageEntryKeepSize": null, 
                "starsImageDescriptionKeepSize": null, 
                "starsImage": starsImage,
                "reviews": null,
                "subtitle1": subtitle1,
                "subtitle2": subtitle2,
                "imageHeader": imageHeader,
                "imageFooter": imageFooter
            };
}

const newTab = (title, entries) => {
    return {
                "title": title,
                "emptyListText": "No matched car",
                "providedByText": "Provided by ThoughtWorks", // Notation: If just has one tab, then the provided text will show on the title
                "providedByText": "powered by ThoughtWorks",
                "providedByLogo": null,
                "leftLogo": null,
                "entries": entries
            }
}

const refreshPageEvent = (elementName) => {
    return {
            "elementName": elementName,
            "actions": [{"type": "ONLINE_UIACTIONS_UPDATE_WIDGET",
                        "arguments": {
                        "restRequest": {
                            "body": null,
                            "path": "/sequence/0/refresh",
                            "requestParameter": null,
                            "type": "Post"
                        }}}]
            }
}

const myCollection_2 = () => {
    const myCarEntry_CarouselEntry = create_MyCarEntry_CarouselEntry(buildImage("http://42.159.6.37:3000/images/other_car1.jpg", null, null, null),
                                                                            "Ironhide",
                                                                            buildImage(null, null, null, null),
                                                                            "V 260 AMG",
                                                                            "0x584F5088D9f10507EBf2f8B4137BD6ceb6EE19D0",
                                                                            "Ironhide",
                                                                            "Others");
    const featureListContents = [
        buildFeatureListContent("Badge 1", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 2", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 3", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 4", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 5", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 6", buildImage(null, null, "navigation/direction_arrow_01", null)),
    ];
    
    const galleryContents = [
                                buildImage("http://42.159.6.37:3000/images/other_car1.jpg", null, null, null),
                            ];
    
    const myCarEntry_DetailEntry = {
                                        "type": "locationBased",
                                        "title": "Ironhide",
                                        "subtitle": "V 260 AMG", 
                                        "headerImage": buildImage("http://42.159.6.37:3000/images/other_car1.jpg", null, null, null),
                                        "starsImage": buildImage(null, null, null, null), 
                                        "voiceMessage": "Provided by ThoughtWorks", 
                                        "favouritesButton": null,
                                        "rows": [
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Collect gene!", null),
                                            buildTwoLineButton(buildImage(null, null, null, null), "Token Address", "0x584F5088D9f10507EBf2f8B4137BD6ceb6EE19D0", null, false),
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Horsepower: 211", null),
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Gear: Automatic", null),
                                            buildGallery(galleryContents)
                                        ]
                                    };

    return {
                    "id": "carouselEntry01",
                    "carouselEntry": myCarEntry_CarouselEntry,
                    "detailsEntry": myCarEntry_DetailEntry
                };
}

const myCollection_3 = () => {
    const myCarEntry_CarouselEntry = create_MyCarEntry_CarouselEntry(buildImage("http://42.159.6.37:3000/images/other_car2.jpg", null, null, null),
                                                                            "Ratchet",
                                                                            buildImage(null, null, null, null),
                                                                            "AMG G 63",
                                                                            "0x758C03dA979C252F74684c110FB8814F70c8fC61",
                                                                            "Ratchet",
                                                                            "Others");
    const featureListContents = [
        buildFeatureListContent("Badge 1", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 2", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 3", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 4", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 5", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 6", buildImage(null, null, "navigation/direction_arrow_01", null)),
    ];
    
    const galleryContents = [
                                buildImage("http://42.159.6.37:3000/images/other_car2.jpg", null, null, null),
                            ];
    
    const myCarEntry_DetailEntry = {
                                        "type": "locationBased",
                                        "title": "Ratchet",
                                        "subtitle": "AMG G 63", 
                                        "headerImage": buildImage("http://42.159.6.37:3000/images/other_car2.jpg", null, null, null),
                                        "starsImage": buildImage(null, null, null, null), 
                                        "voiceMessage": "Provided by ThoughtWorks", 
                                        "favouritesButton": null,
                                        "rows": [
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Collect gene!", null),
                                            buildTwoLineButton(buildImage(null, null, null, null), "Token Address", "0x758C03dA979C252F74684c110FB8814F70c8fC61", null, false),
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Horsepower: 585", null),
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Gear: Automatic", null),
                                            buildGallery(galleryContents)
                                        ]
                                    };

    return {
                    "id": "carouselEntry01",
                    "carouselEntry": myCarEntry_CarouselEntry,
                    "detailsEntry": myCarEntry_DetailEntry
                };
}

const myCollection_4 = () => {
    const myCarEntry_CarouselEntry = create_MyCarEntry_CarouselEntry(buildImage("http://42.159.6.37:3000/images/other_car3.jpg", null, null, null),
                                                                            "Cliffjumper",
                                                                            buildImage(null, null, null, null),
                                                                            "AMG GT S",
                                                                            "0xfBa844EA3dA516C3538AfF81425adddfa7d392be",
                                                                            "Cliffjumper",
                                                                            "Others");
    const featureListContents = [
        buildFeatureListContent("Badge 1", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 2", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 3", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 4", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 5", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 6", buildImage(null, null, "navigation/direction_arrow_01", null)),
    ];
    
    const galleryContents = [
                                buildImage("http://42.159.6.37:3000/images/other_car3.jpg", null, null, null),
                            ];
    
    const myCarEntry_DetailEntry = {
                                        "type": "locationBased",
                                        "title": "Cliffjumper",
                                        "subtitle": "AMG GT S", 
                                        "headerImage": buildImage("http://42.159.6.37:3000/images/other_car3.jpg", null, null, null),
                                        "starsImage": buildImage(null, null, null, null), 
                                        "voiceMessage": "Provided by ThoughtWorks", 
                                        "favouritesButton": null,
                                        "rows": [
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Collect gene!", null),
                                            buildTwoLineButton(buildImage(null, null, null, null), "Token Address", "0xfBa844EA3dA516C3538AfF81425adddfa7d392be", null, false),
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Horsepower: 522", null),
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Gear: Automatic", null),
                                            buildGallery(galleryContents)
                                        ]
                                    };

    return {
                    "id": "carouselEntry01",
                    "carouselEntry": myCarEntry_CarouselEntry,
                    "detailsEntry": myCarEntry_DetailEntry
                };
}

const myCollection_1 = () => {
    const myCarEntry_CarouselEntry = create_MyCarEntry_CarouselEntry(buildImage("http://42.159.6.37:3000/images/my_guest_car1.png", null, null, null),
                                                                            "Optimus Prime",
                                                                            buildImage(null, null, null, null),
                                                                            "G 500",
                                                                            "0x9958b1503D238A2CD0C2b51026344ec0231c7EB0",
                                                                            "Optimus Prime",
                                                                            "Others");
    const featureListContents = [
        buildFeatureListContent("Badge 1", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 2", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 3", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 4", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 5", buildImage(null, null, "navigation/direction_arrow_01", null)),
        buildFeatureListContent("Badge 6", buildImage(null, null, "navigation/direction_arrow_01", null)),
    ];
    
    const galleryContents = [
                                buildImage("http://42.159.6.37:3000/images/my_guest_car1.png", null, null, null),
                                buildImage("http://42.159.6.37:3000/images/my_guest_car2.png", null, null, null),
                                buildImage("http://42.159.6.37:3000/images/my_guest_car3.png", null, null, null)
                            ];
    
    const myCarEntry_DetailEntry = {
                                        "type": "locationBased",
                                        "title": "Optimus Prime",
                                        "subtitle": "G 500", 
                                        "headerImage": buildImage("http://42.159.6.37:3000/images/my_guest_car1.png", null, null, null),
                                        "starsImage": buildImage(null, null, null, null), 
                                        "voiceMessage": "Provided by ThoughtWorks", 
                                        "favouritesButton": null,
                                        "rows": [
                                            buildOneLineButton("collectGene", buildImage(null, null, null, null), "Collect gene!", null),
                                            buildTwoLineButton(buildImage(null, null, null, null), "Token Address", "0x9958b1503D238A2CD0C2b51026344ec0231c7EB0", null, false),
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Horsepower: 211", null),
                                            buildOneLineButton(null, buildImage(null, null, null, null), "Gear: Automatic", null),
                                            buildGallery(galleryContents)
                                        ]
                                    };

    return {
                    "id": "carouselEntry01",
                    "carouselEntry": myCarEntry_CarouselEntry,
                    "detailsEntry": myCarEntry_DetailEntry
                };
}

module.exports = {
    startApp: function () {
        const myCarEntry_CarouselEntry = create_MyCarEntry_CarouselEntry(buildImage("http://42.159.6.37:3000/images/my_original_car1.png", null, null, null),
                                                                            "Bumblebee",
                                                                            buildImage(null, null, null, null),
                                                                            "AMG CLA 454MATIC",
                                                                            "0x95DC578D3C57900420beB5478faD20A94763504b",
                                                                            "Bumblebee",
                                                                            "Others");
        const featureListContents = [
            buildFeatureListContent("Badge 1", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 2", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 3", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 4", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 5", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 6", buildImage(null, null, "navigation/direction_arrow_01", null)),
        ];
        
        const galleryContents = [
                                    buildImage("http://42.159.6.37:3000/images/my_original_car1.png", null, null, null),
                                    buildImage("http://42.159.6.37:3000/images/my_original_car2.png", null, null, null),
                                    buildImage("http://42.159.6.37:3000/images/my_original_car3.png", null, null, null)
                                ];
        
        const myCarEntry_DetailEntry = {
                                            "type": "locationBased",
                                            "title": "Bumblebee",
                                            "subtitle": "AMG CLA 454MATIC", 
                                            "headerImage": buildImage("http://42.159.6.37:3000/images/my_original_car1.png", null, null, null),
                                            "starsImage": buildImage(null, null, null, null), 
                                            "voiceMessage": "Provided by ThoughtWorks", 
                                            "favouritesButton": null,
                                            "rows": [
                                                buildTwoLineButton(buildImage(null, null, null, null), "Token Address", "0x95DC578D3C57900420beB5478faD20A94763504b", null, false),
                                                buildOneLineButton(null, buildImage(null, null, null, null), "Horsepower: 381", null),
                                                buildOneLineButton(null, buildImage(null, null, null, null), "Gear: Automatic", null),
                                                // buildTwoLineButton(buildImage(null, null, null, null), "Primary Text", "Secondary Text", null, true),
                                                // buildFeatureList(featureListContents),
                                                buildGallery(galleryContents)
                                            ]
                                        };

        const myCarEntry = {
                        "id": "carouselEntry01",
                        "carouselEntry": myCarEntry_CarouselEntry,
                        "detailsEntry": myCarEntry_DetailEntry
                    };

        return ({
            "widgetData": {
                "tabs": [newTab("My Crypto Car", [myCarEntry]), newTab("Collection", [myCollection_2(), myCollection_3(), myCollection_1(), myCollection_4()])]
            },
            "events": [refreshPageEvent("collectGene")]
        });
    },
    refreshPage: function () {
        const myCarEntry_CarouselEntry_New = create_MyCarEntry_CarouselEntry(buildImage("http://42.159.6.37:3000/images/my_upgraded_car1.png", null, null, null),
                                                                            "Super Bumblebee",
                                                                            buildImage(null, null, null, null),
                                                                            "AMG CLA 454MATIC",
                                                                            "0x95DC578D3C57900420beB5478faD20A94763504b",
                                                                            "Super Bumblebee",
                                                                            "Others");

        const featureListContents = [
            buildFeatureListContent("Badge 1", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 2", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 3", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 4", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 5", buildImage(null, null, "navigation/direction_arrow_01", null)),
            buildFeatureListContent("Badge 6", buildImage(null, null, "navigation/direction_arrow_01", null)),
        ];
        
        const galleryContents = [
                                    buildImage("http://42.159.6.37:3000/images/my_upgraded_car1.png", null, null, null),
                                    buildImage("http://42.159.6.37:3000/images/my_upgraded_car2.png", null, null, null),
                                    buildImage("http://42.159.6.37:3000/images/my_upgraded_car3.png", null, null, null)
                                ];
        
        const myCarEntry_DetailEntry = {
                                            "type": "locationBased",
                                            "title": "Super Bumblebee",
                                            "subtitle": "AMG CLA 454MATIC", 
                                            "headerImage": buildImage("http://42.159.6.37:3000/images/my_upgraded_car1.png", null, null, null),
                                            "starsImage": buildImage(null, null, null, null), 
                                            "voiceMessage": "Provided by ThoughtWorks", 
                                            "favouritesButton": null,
                                            "rows": [
                                                buildTwoLineButton(buildImage(null, null, null, null), "Token Address", "0x95DC578D3C57900420beB5478faD20A94763504b", null, false),
                                                buildOneLineButton(null, buildImage(null, null, null, null), "Horsepower: 381", null),
                                                buildOneLineButton(null, buildImage(null, null, null, null), "Gear: Automatic", null),
                                                buildGallery(galleryContents)
                                            ]
                                        };

        const myCarEntryNew = {
                        "id": "carouselEntry01",
                        "carouselEntry": myCarEntry_CarouselEntry_New,
                        "detailsEntry": myCarEntry_DetailEntry
                    }

        return ({
            "widgetData": {
                "tabs": [newTab("My Crypto Car", [myCarEntryNew]), newTab("Collection", [myCollection_2(), myCollection_3(), myCollection_1(), myCollection_4()])]
            },
            "events": [refreshPageEvent("collectGene")]
        });
    }
}