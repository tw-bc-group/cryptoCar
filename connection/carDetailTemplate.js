const carMap = {
    20000: {
        "name": "Ironhide",
        "class": "V 260 AMG",
        "tokenAddress": "0x584F5088D9f10507EBf2f8B4137BD6ceb6EE19D0",
        "horsePower": "211",
        "gear": "Automatic",
        "imageName": "http://42.159.6.37:3000/images/other_car1.jpg"
    }, 
    20001: {
        "name": "Ratchet",
        "class": "AMG G 63",
        "tokenAddress": "0x758C03dA979C252F74684c110FB8814F70c8fC61",
        "horsePower": "585",
        "gear": "Automatic",
        "imageName": "http://42.159.6.37:3000/images/other_car2.jpg"
    },
    20002: {
        "name": "Cliffjumper",
        "class": "AMG GT S",
        "tokenAddress": "0xfBa844EA3dA516C3538AfF81425adddfa7d392be",
        "horsePower": "522",
        "gear": "Automatic",
        "imageName": "http://42.159.6.37:3000/images/other_car3.jpg"
    },
    20003: {
        "name": "Optimus Prime",
        "class": "V 260 L",
        "tokenAddress": "0x9958b1503D238A2CD0C2b51026344ec0231c7EB0",
        "horsePower": "211",
        "gear": "Automatic",
        "imageName": "http://42.159.6.37:3000/images/my_guest_car1.png"
    }
}
module.exports = {
    buildCarDetail: function (tokenId, bcm, navigatedMileage) {
        car = carMap[tokenId];
        console.log("**** detail json ****", JSON.stringify(car));
        return (
            {
                "location": "北京",
                "addPOIinfos": [
                    {
                        "type": "subheader",
                        "text": "CryptoCar Details"
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
                                                "text": "这里是内嵌entry text"
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
                                            }
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
                                                "text": "tokenId: " + tokenId + "\nbcm: " + bcm + "\nnavigatedMileage: " + navigatedMileage 
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