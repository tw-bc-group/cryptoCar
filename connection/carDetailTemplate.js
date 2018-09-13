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
        car = carMap[20000];
        console.log("**** detail json ****", JSON.stringify(car));
        const detail = {
            "location": "北京",
            "addPOIinfos": [ 
                {
                "type": "image",
                "width": 100,
                "height": 100,
                "scale": 1,
                "verticalAlignment": "top", 
                "horizontalAlignment": "top", 
                "picture": {
                    "url": car.imageName,
                    "base64": null,
                    "asset": null,
                    "uiImage": null
                }
                }, {
                    "type": "row",
                    "entries": [
                        {
                            "type": "text",
                            "width": 100,
                            "height": 100,
                            "verticalAlignment": "center",
                            "horizontalAlignment": "left",
                            "font": "f12",
                            "color": "color_c07a",
                            "text": "Name: " + car.name + "\nClass: " + car.class + "\nToken Address: " + car.tokenAddress + "\nHorsepower: " + car.horsePower + "\nGear: " + car.gear
                        }
                    ]
                }]
        }
        // return detail;
        return (
            {
                "location": "北京",
                "addPOIinfos": [
                    {
                        "type": "subheader",
                        "text": car.name
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
                                                    "base64": null,
                                                    "url": car.imageName,
                                                },
                                                "verticalAlignment": "top",
                                                "horizontalAlignment": "left",
                                            },
                                            {
                                                "type": "text",
                                                "width": 70,
                                                "verticalAlignment": "center",
                                                "horizontalAlignment": "left",
                                                "font": "f12",
                                                "color": "color_c07a",
                                                "text": "test!!!!!!!!!"
                                            }
                                        ]
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        );
    }
};