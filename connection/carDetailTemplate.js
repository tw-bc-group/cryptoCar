module.exports = {
    buildCarDetail: function (tokenId, bcm, navigatedMileage) {
        return (
            {
                "location": "北京",
                "addPOIinfos": [
                    {
                        "type": "subheader",
                        "text": "DETAILS"
                    },
                    {
                        "type": "row",
                        "entries": [
                            {
                                "type": "column",
                                "width": 100,
                                "entries": [
                                    {
                                        "type": "row",
                                        "entries": [
                                            {
                                                "type": "image",
                                                "picture": {
                                                    "base64": ""
                                                },
                                                "horizontalAlignment": "right",
                                                "width": 30
                                            },
                                            {
                                                "type": "text",
                                                "width": 70,
                                                "verticalAlignment": "center",
                                                "horizontalAlignment": "left",
                                                "font": "f12",
                                                "color": "color_c07a",
                                                "text": "(1611), 23333/Person"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "row",
                                        "entries": [
                                            {
                                                "type": "image",
                                                "picture": {
                                                    "base64": ""
                                                },
                                                "horizontalAlignment": "center",
                                                "width": 10
                                            },
                                            {}
                                        ]
                                    },
                                    {
                                        "type": "text",
                                        "width": 90,
                                        "verticalAlignment": "center",
                                        "horizontalAlignment": "left",
                                        "font": "f12",
                                        "color": "color_c07a",
                                        "text": "周一至周日\n00:00-21:00",
                                        "type": "row",
                                        "entries": [
                                            {
                                                "type": "image",
                                                "picture": {
                                                    "base64": ""
                                                },
                                                "horizontalAlignment": "center",
                                                "width": 10
                                            },
                                            {
                                                "type": "text",
                                                "width": 90,
                                                "verticalAlignment": "center",
                                                "horizontalAlignment": "left",
                                                "font": "f12",
                                                "color": "color_c07a",
                                                "text": "tokenId: ` + tokenId + `bcm: ` + bcm + `navigatedMileage: ` + navigatedMileage + `"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        );
    }
};