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
                "content":[
                    contents
                ]
            }
}

const buildFeatureListContent = (title, iconImage) => {
    return {
                "title": title,
                "icon": iconImage
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

const myCarEntry_CarouselEntry = create_MyCarEntry_CarouselEntry(buildImage("http://42.159.6.37:3000/images/carpic6.png", null, null, null),
                                                                            "My Car",
                                                                            buildImage(null, null, null, null),
                                                                            "Car property 1",
                                                                            "Car property 2",
                                                                            "My Crypto Car",
                                                                            "Owner");

const myCarEntry_CarouselEntry_New = create_MyCarEntry_CarouselEntry(buildImage("http://42.159.6.37:3000/images/carpic7.png", null, null, null),
                                                                            "My Car Upgrade",
                                                                            buildImage(null, null, null, null),
                                                                            "Car property 1 new one",
                                                                            "Car property 2 new one",
                                                                            "My Crypto Car new one",
                                                                            "Owner new one");

const contents = [
    buildFeatureListContent("Badge 1", buildImage(null, null, "navigation/direction_arrow_01", null)),
    buildFeatureListContent("Badge 2", buildImage(null, null, "navigation/direction_arrow_01", null)),
    buildFeatureListContent("Badge 3", buildImage(null, null, "navigation/direction_arrow_01", null)),
    buildFeatureListContent("Badge 4", buildImage(null, null, "navigation/direction_arrow_01", null)),
    buildFeatureListContent("Badge 5", buildImage(null, null, "navigation/direction_arrow_01", null)),
    buildFeatureListContent("Badge 6", buildImage(null, null, "navigation/direction_arrow_01", null)),
]

const myCarEntry_DetailEntry = {
                                    "type": "locationBased",
                                    "title": "My Car",
                                    "subtitle": "Description 1", 
                                    "headerImage": buildImage("http://42.159.6.37:3000/images/carpic6.png", null, null, null),
                                    "starsImage": buildImage(null, null, null, null), 
                                    "voiceMessage": "Provided by ThoughtWorks", 
                                    "favouritesButton": null,
                                    "rows": [
                                        buildOneLineButton("contractId", buildImage(null, null, null, null), "contract Id ...", null),
                                        buildTwoLineButton(buildImage(null, null, null, null), "Primary Text", "Secondary Text", null, true),
                                        buildFeatureList(contents),
                                    {
                                        "type": "pictureGallery",
                                        "content": [
                                            buildImage("http://42.159.6.37:3000/images/carpic6.png", null, null, null),
                                            buildImage("http://42.159.6.37:3000/images/carpic7.png", null, null, null),
                                            buildImage("http://42.159.6.37:3000/images/carpic8.png", null, null, null)
                                        ]
                                    }]
                                }
                                
const myCarEntry = {
                        "id": "carouselEntry01",
                        "carouselEntry": myCarEntry_CarouselEntry,
                        "detailsEntry": myCarEntry_DetailEntry
                    }

const myCarEntryNew = {
                        "id": "carouselEntry01",
                        "carouselEntry": myCarEntry_CarouselEntry_New,
                        "detailsEntry": myCarEntry_DetailEntry
                    }

const newTab = (title, entries) => {
    return {
                "title": title,
                "emptyListText": "No matched car",
                "providedByText": "Provided by ThoughtWorks", // Notation: If just has one tab, then the provided text will show on the title
                "providedByText": "Crypto Car",
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

module.exports = {
    startApp: function () {
        return ({
            "widgetData": {
                "tabs": [newTab("My Crypto Car", [myCarEntry]), newTab("Collection", [myCarEntry, myCarEntry])]
            },
            "events": [refreshPageEvent("contractId")]
        });
    },
    refreshPage: function () {
        return ({
            "widgetData": {
                "tabs": [newTab("My Crypto Car", [myCarEntryNew]), newTab("Collection", [myCarEntryNew, myCarEntryNew])]
            },
            "events": [refreshPageEvent("contractId")]
        });
    }
}