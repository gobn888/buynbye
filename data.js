'use strict()';

var app = angular.module('BuyBye', [])
app.controller('declareController', function($scope) {
    $scope.product = [
        //product for first shop
        {
            'id': 'PD1',
            'index': 0,
            'name': 'BALENCIAGA 10 Avenue George V EDP',
            'price': '63.20',
            'currency': 'GBP',
            'description': '75ml. Combines notes of pepper and quiet mossy wood; a scent that was inspired by the breezes of flowers and sunshine.',
            'stock': 50,
            'category': 'Perfume',
            'shopname': 'Perfume For You',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 4B',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        }, {
            'id': 'PD2',
            'index': 1,
            'name': 'BULGARI Leau Exquise Mon Jasmin Noir EDT',
            'price': '52.67',
            'currency': 'GBP',
            'description': '50ml. BULGARI Leau Exquise is a precious, exquisite Eau de Toilette, revealing a new fresh and delicate Jasmine. Sparkling top notes blend with addictive green almond. The heart of the fragrance is an infusion of tender jasmine flowers with precious woods and sensual white musks in the dry down. A bright and playful Eau.',
            'stock': 65,
            'category': 'Perfume',
            'shopname': 'Perfume For You',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 4B',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        }, {
            'id': 'PD3',
            'index': 2,
            'name': 'CALVIN KLEIN CK One EDT Bottle',
            'price': '32.00',
            'currency': 'GBP',
            'description': '200ml. A light, relaxed scent is meant to be used lavishly. It is an intimate fragrance, one that you need to be near to fully appreciate. A subtle, honest version of sexiness. Top: Bergamot, Lemon, Pineapple, Papaya. Heart: Nutmeg, Violet, Orris Root, Jasmine. Bottom: Sandalwood, Amber, Musk, Cedar.',
            'stock': 38,
            'category': 'Perfume',
            'shopname': 'Perfume For You',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 4B',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        }, {
            'id': 'PD4',
            'index': 3,
            'name': 'DKNY Be Delicious Woman',
            'price': '53.50',
            'currency': 'GBP',
            'description': '100ml. Take a bite out of life. DKNY Be Delicious. Fresh from New York. The fragrance for women.',
            'stock': 12,
            'category': 'Perfume',
            'shopname': 'Perfume For You',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 4B',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        }, {
            'id': 'PD5',
            'index': 4,
            'name': 'DOLCE & GABBANA The One Male EDT',
            'price': '51.50',
            'currency': 'GBP',
            'description': '100ml. Dolce & Gabbana The One for Men is a spicy oriental fragrance that is both classic and modern, vibrant and engaging. It is a concentrate of elegance and sensuality with bright, fresh top notes, a spicy and warm heart and refined, masculine base notes.',
            'stock': 6,
            'category': 'Perfume',
            'shopname': 'Perfume For You',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 4B',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        },

        //product for second shop
        {
            'id': 'PD6',
            'index': 5,
            'name': 'BALENCIAGA 10 Avenue George V EDP',
            'price': '350.00',
            'currency': 'MYR',
            'description': '75ml. Combines notes of pepper and quiet mossy wood; a scent that was inspired by the breezes of flowers and sunshine.',
            'stock': 24,
            'category': 'Perfume',
            'shopname': 'Travelers shop',
            'airportName': 'Kuala Lumpur International Airport',
            'address': 'Lot 10',
            'operatinghour': 'Mon-Sun	06.00 - 24.00'
        }, {
            'id': 'PD7',
            'index': 6,
            'name': 'BULGARI Leau Exquise Mon Jasmin Noir EDT',
            'price': '350.00',
            'currency': 'MYR',
            'description': '50ml. DETAILS Leau Exquise is a precious, exquisite Eau de Toilette, revealing a new fresh and delicate Jasmine. Sparkling top notes blend with addictive green almond. The heart of the fragrance is an infusion of tender jasmine flowers with precious woods and sensual white musks in the dry down. A bright and playful Eau.',
            'stock': 60,
            'category': 'Perfume',
            'shopname': 'Travelers shop',
            'airportName': 'Kuala Lumpur International Airport',
            'address': 'Lot 10',
            'operatinghour': 'Mon-Sun	06.00 - 24.00'
        }, {
            'id': 'PD8',
            'index': 7,
            'name': 'CALVIN KLEIN CK One EDT Bottle',
            'price': '150.00',
            'currency': 'MYR',
            'description': '200ml. A light, relaxed scent is meant to be used lavishly. It is an intimate fragrance, one that you need to be near to fully appreciate. A subtle, honest version of sexiness. Top: Bergamot, Lemon, Pineapple, Papaya. Heart: Nutmeg, Violet, Orris Root, Jasmine. Bottom: Sandalwood, Amber, Musk, Cedar.',
            'stock': 5,
            'category': 'Perfume',
            'shopname': 'Travelers shop',
            'airportName': 'Kuala Lumpur International Airport',
            'address': 'Lot 10',
            'operatinghour': 'Mon-Sun	06.00 - 24.00'
        },

        //product for SH3
        {
            'id': 'PD9',
            'index': 8,
            'name': 'BULGARI Leau Exquise Mon Jasmin Noir EDT',
            'price': '500.00',
            'currency': 'CNY',
            'description': '50ml. DETAILS Leau Exquise is a precious, exquisite Eau de Toilette, revealing a new fresh and delicate Jasmine. Sparkling top notes blend with addictive green almond. The heart of the fragrance is an infusion of tender jasmine flowers with precious woods and sensual white musks in the dry down. A bright and playful Eau.',
            'stock': 60,
            'category': 'Perfume',
            'shopname': 'Come and Smell',
            'airportName': 'Beijing Capital International Airport',
            'address': 'Lot B4',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        }, {
            'id': 'PD10',
            'index': 9,
            'name': 'CALVIN KLEIN CK One EDT Bottle',
            'price': '300.00',
            'currency': 'CNY',
            'description': '200ml. A light, relaxed scent is meant to be used lavishly. It is an intimate fragrance, one that you need to be near to fully appreciate. A subtle, honest version of sexiness. Top: Bergamot, Lemon, Pineapple, Papaya. Heart: Nutmeg, Violet, Orris Root, Jasmine. Bottom: Sandalwood, Amber, Musk, Cedar.',
            'stock': 37,
            'category': 'Perfume',
            'shopname': 'Come and Smell',
            'airportName': 'Beijing Capital International Airport',
            'address': 'Lot B4',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        }, {
            'id': 'PD11',
            'index': 10,
            'name': 'DKNY Be Delicious Woman',
            'price': '400.00',
            'currency': 'CNY',
            'description': '100ml. Take a bite out of life. DKNY Be Delicious. Fresh from New York. The fragrance for women.',
            'stock': 52,
            'category': 'Perfume',
            'shopname': 'Come and Smell',
            'airportName': 'Beijing Capital International Airport',
            'address': 'Lot B4',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        },

        //product for 4th shop
        {
            'id': 'PD12',
            'index': 11,
            'name': 'BULGARI Leau Exquise Mon Jasmin Noir EDT',
            'price': '500.00',
            'currency': 'NOK',
            'description': '50ml. DETAILS Leau Exquise is a precious, exquisite Eau de Toilette, revealing a new fresh and delicate Jasmine. Sparkling top notes blend with addictive green almond. The heart of the fragrance is an infusion of tender jasmine flowers with precious woods and sensual white musks in the dry down. A bright and playful Eau.',
            'stock': 55,
            'category': 'Perfume',
            'shopname': 'Senses',
            'airportName': 'Oslo Gardemoen',
            'address': 'Lot 42',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        }, {
            'id': 'PD13',
            'index': 12,
            'name': 'CALVIN KLEIN CK One EDT Bottle',
            'price': '320.00',
            'currency': 'NOK',
            'description': '200ml. A light, relaxed scent is meant to be used lavishly. It is an intimate fragrance, one that you need to be near to fully appreciate. A subtle, honest version of sexiness. Top: Bergamot, Lemon, Pineapple, Papaya. Heart: Nutmeg, Violet, Orris Root, Jasmine. Bottom: Sandalwood, Amber, Musk, Cedar.',
            'stock': 38,
            'category': 'Perfume',
            'shopname': 'Senses',
            'airportName': 'Oslo Gardemoen',
            'address': 'Lot 42',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        }, {
            'id': 'PD14',
            'index': 13,
            'name': 'DKNY Be Delicious Woman',
            'price': '450.00',
            'currency': 'NOK',
            'description': '100ml. Take a bite out of life. DKNY Be Delicious. Fresh from New York. The fragrance for women.',
            'stock': 32,
            'category': 'Perfume',
            'shopname': 'Senses',
            'airportName': 'Oslo Gardemoen',
            'address': 'Lot 42',
            'operatinghour': 'Mon-Sun	00.00 - 24.00'
        },

        //product for 5th shop
        {
            'id': 'PD15',
            'index': 14,
            'name': 'BULGARI Leau Exquise Mon Jasmin Noir EDT',
            'price': '60.60',
            'currency': 'EUR',
            'description': '50ml. DETAILS Leau Exquise is a precious, exquisite Eau de Toilette, revealing a new fresh and delicate Jasmine. Sparkling top notes blend with addictive green almond. The heart of the fragrance is an infusion of tender jasmine flowers with precious woods and sensual white musks in the dry down. A bright and playful Eau.',
            'stock': 15,
            'category': 'Perfume',
            'shopname': 'Hola sentidos',
            'airportName': 'Madrid Barajas Airport',
            'address': 'Lot 98',
            'operatinghour': 'Mon-Sun	09.00 - 23.00'
        }, {
            'id': 'PD16',
            'index': 15,
            'name': 'CALVIN KLEIN CK One EDT Bottle',
            'price': '40.00',
            'currency': 'EUR',
            'description': '200ml. A light, relaxed scent is meant to be used lavishly. It is an intimate fragrance, one that you need to be near to fully appreciate. A subtle, honest version of sexiness. Top: Bergamot, Lemon, Pineapple, Papaya. Heart: Nutmeg, Violet, Orris Root, Jasmine. Bottom: Sandalwood, Amber, Musk, Cedar.',
            'stock': 20,
            'category': 'Perfume',
            'shopname': 'Hola sentidos',
            'airportName': 'Madrid Barajas Airport',
            'address': 'Lot 98',
            'operatinghour': 'Mon-Sun	09.00 - 23.00'
        }, {
            'id': 'PD17',
            'index': 16,
            'name': 'DKNY Be Delicious Woman',
            'price': '60.50',
            'currency': 'EUR',
            'description': '100ml. Take a bite out of life. DKNY Be Delicious. Fresh from New York. The fragrance for women.',
            'stock': 62,
            'category': 'Perfume',
            'shopname': 'Hola sentidos',
            'airportName': 'Madrid Barajas Airport',
            'address': 'Lot 98',
            'operatinghour': 'Mon-Sun	09.00 - 23.00'
        }, {
            'id': 'PD18',
            'index': 17,
            'name': 'DOLCE & GABBANA The One Male EDT',
            'price': '50.99',
            'currency': 'EUR',
            'description': '100ml. Dolce & Gabbana The One for Men is a spicy oriental fragrance that is both classic and modern, vibrant and engaging. It is a concentrate of elegance and sensuality with bright, fresh top notes, a spicy and warm heart and refined, masculine base notes.',
            'stock': 60,
            'category': 'Perfume',
            'shopname': 'Hola sentidos',
            'airportName': 'Madrid Barajas Airport',
            'address': 'Lot 98',
            'operatinghour': 'Mon-Sun	09.00 - 23.00'
        },

        //second product first shop
        {
            'id': 'PD19',
            'index': 18,
            'name': 'BVLGARI Bulgari Restyling',
            'price': '3,750.00',
            'currency': 'GBP',
            'description': 'Alligator strap, Automatic movement with Date.',
            'stock': 5,
            'category': 'Fashion',
            'shopname': 'Heathrow Boutique',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 2C',
            'operatinghour': 'Mon-Sun	09.00 - 23.00'
        }, {
            'id': 'PD20',
            'index': 19,
            'name': 'OMEGA De Ville Hour Vision Annual Calendar',
            'price': '6,008.33',
            'currency': 'GBP',
            'description': 'Originally introduced in 2007, the OMEGA De Ville Hour Vision boldly displays a complex level of workmanship from the finely honed details on the sophisticated dial to the mechanics within. The Hour Vision is aptly named: the beauty of the movement is clearly visible through sapphire glass apertures in the side of the watchcase and through the sapphire crystal case back.',
            'stock': 3,
            'category': 'Fashion',
            'shopname': 'Heathrow Boutique',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 2C',
            'operatinghour': 'Mon-Sun	09.00 - 23.00'
        }, {
            'id': 'PD21',
            'index': 20,
            'name': 'OAKLEY At Sunglass Hut OO9039',
            'price': '130.00',
            'currency': 'GBP',
            'description': 'Devoted to making the best sunglasses on the planet by letting invention lead the way. With a passion to reinvent from scratch, Oakley sunglasses defy convention and set the standard for design, performance, and protection by wrapping innovation in art.',
            'stock': 20,
            'category': 'Fashion',
            'shopname': 'Heathrow Boutique',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 2C',
            'operatinghour': 'Mon-Sun	09.00 - 23.00'
        }, {
            'id': 'PD22',
            'index': 21,
            'name': 'PRADA At Sunglass Hut PR 27LS',
            'price': '190.00',
            'currency': 'GBP',
            'description': 'Get it here. Get it now. With an exclusive Sunglass Hut style, oval, brown plastic frame has brown polarized lenses and features classic branding at each temple. You always were something special.',
            'stock': 15,
            'category': 'Fashion',
            'shopname': 'Heathrow Boutique',
            'airportName': 'London Heathrow Airport',
            'address': 'Lot 2C',
            'operatinghour': 'Mon-Sun	09.00 - 23.00'
        },

        //second product second shop
        {
            'id': 'PD23',
            'index': 22,
            'name': 'EMPORIO ARMANI At Sunglass Hut EA4033',
            'price': '599.99',
            'currency': 'MYR',
            'description': 'Emporio Armani once again going above and beyond the standard into fashion accessories. These 4002 sunglasses feature the classic bird logo etched on the temple arms and a bright contrasting trim around the frames and temple arms. For those who like to mix sun and style.',
            'stock': 10,
            'category': 'Fashion',
            'shopname': 'Tik-tok',
            'airportName': 'Kuala Lumpur International Airport',
            'address': 'Lot 56',
            'operatinghour': 'Mon-Sun	09.00 - 22.00'
        }, {
            'id': 'PD24',
            'index': 23,
            'name': 'OAKLEY At Sunglass Hut OO9039',
            'price': '650.00',
            'currency': 'MYR',
            'description': 'Devoted to making the best sunglasses on the planet by letting invention lead the way. With a passion to reinvent from scratch, Oakley sunglasses defy convention and set the standard for design, performance, and protection by wrapping innovation in art.',
            'stock': 10,
            'category': 'Fashion',
            'shopname': 'Tik-tok',
            'airportName': 'Kuala Lumpur International Airport',
            'address': 'Lot 56',
            'operatinghour': 'Mon-Sun	09.00 - 22.00'
        }, {
            'id': 'PD25',
            'index': 24,
            'name': 'PRADA At Sunglass Hut PR 27LS',
            'price': '699.00',
            'currency': 'MYR',
            'description': 'Get it here. Get it now. With an exclusive Sunglass Hut style, oval, brown plastic frame has brown polarized lenses and features classic branding at each temple. You always were something special.',
            'stock': 1,
            'category': 'Fashion',
            'shopname': 'Tik-tok',
            'airportName': 'Kuala Lumpur International Airport',
            'address': 'Lot 56',
            'operatinghour': 'Mon-Sun	09.00 - 22.00'
        },

        //second product third shop
        {
            'id': 'PD26',
            'index': 25,
            'name': 'EMPORIO ARMANI At Sunglass Hut EA4033',
            'price': '999.99',
            'currency': 'CNY',
            'description': 'Emporio Armani once again going above and beyond the standard into fashion accessories. These 4002 sunglasses feature the classic bird logo etched on the temple arms and a bright contrasting trim around the frames and temple arms. For those who like to mix sun and style.',
            'stock': 30,
            'category': 'Fashion',
            'shopname': 'Looking good',
            'airportName': 'Beijing Capital International Airport',
            'address': 'Lot C5',
            'operatinghour': 'Mon-Sun	09.00 - 22.00'
        }, {
            'id': 'PD27',
            'index': 26,
            'name': 'OAKLEY At Sunglass Hut OO9039',
            'price': '1399.99',
            'currency': 'CNY',
            'description': 'Devoted to making the best sunglasses on the planet by letting invention lead the way. With a passion to reinvent from scratch, Oakley sunglasses defy convention and set the standard for design, performance, and protection by wrapping innovation in art.',
            'stock': 30,
            'category': 'Fashion',
            'shopname': 'Looking good',
            'airportName': 'Beijing Capital International Airport',
            'address': 'Lot C5',
            'operatinghour': 'Mon-Sun	09.00 - 22.00'
        }, {
            'id': 'PD28',
            'index': 27,
            'name': 'PRADA At Sunglass Hut PR 27LS',
            'price': '1399.99',
            'currency': 'CNY',
            'description': 'Get it here. Get it now. With an exclusive Sunglass Hut style, oval, brown plastic frame has brown polarized lenses and features classic branding at each temple. You always were something special.',
            'stock': 26,
            'category': 'Fashion',
            'shopname': 'Looking good',
            'airportName': 'Beijing Capital International Airport',
            'address': 'Lot C5',
            'operatinghour': 'Mon-Sun	09.00 - 22.00'
        },

        //second product forth shop
        {
            'id': 'PD29',
            'index': 28,
            'name': 'EMPORIO ARMANI At Sunglass Hut EA4033',
            'price': '1099.99',
            'currency': 'NOK',
            'description': 'Emporio Armani once again going above and beyond the standard into fashion accessories. These 4002 sunglasses feature the classic bird logo etched on the temple arms and a bright contrasting trim around the frames and temple arms. For those who like to mix sun and style.',
            'stock': 8,
            'category': 'Fashion',
            'shopname': 'Watch me',
            'airportName': 'Oslo Gardemoen',
            'address': 'Lot 44',
            'operatinghour': 'Mon-Sun	08.00 - 22.00'
        }, {
            'id': 'PD30',
            'index': 29,
            'name': 'OAKLEY At Sunglass Hut OO9039',
            'price': '1599.99',
            'currency': 'NOK',
            'description': 'Devoted to making the best sunglasses on the planet by letting invention lead the way. With a passion to reinvent from scratch, Oakley sunglasses defy convention and set the standard for design, performance, and protection by wrapping innovation in art.',
            'stock': 10,
            'category': 'Fashion',
            'shopname': 'Watch me',
            'airportName': 'Oslo Gardemoen',
            'address': 'Lot 44',
            'operatinghour': 'Mon-Sun	08.00 - 22.00'
        }, {
            'id': 'PD31',
            'index': 30,
            'name': 'PRADA At Sunglass Hut PR 27LS',
            'price': '1499.99',
            'currency': 'NOK',
            'description': 'Get it here. Get it now. With an exclusive Sunglass Hut style, oval, brown plastic frame has brown polarized lenses and features classic branding at each temple. You always were something special.',
            'stock': 15,
            'category': 'Fashion',
            'shopname': 'Watch me',
            'airportName': 'Oslo Gardemoen',
            'address': 'Lot 44',
            'operatinghour': 'Mon-Sun	08.00 - 22.00'
        },

        //second product fifth shop
        {
            'id': 'PD32',
            'index': 31,
            'name': 'BVLGARI Bulgari Restyling',
            'price': '3,950.00',
            'currency': 'EUR',
            'description': 'Alligator strap, Automatic movement with Date.',
            'stock': 3,
            'category': 'Fashion',
            'shopname': 'Nos encanta la moda',
            'airportName': 'Madrid Barajas Airport',
            'address': 'Lot 96',
            'operatinghour': 'Mon-Sun	08.00 - 22.00'
        }, {
            'id': 'PD33',
            'index': 32,
            'name': 'OMEGA De Ville Hour Vision Annual Calendar',
            'price': '6,500.00',
            'currency': 'EUR',
            'description': 'Originally introduced in 2007, the OMEGA De Ville Hour Vision boldly displays a complex level of workmanship from the finely honed details on the sophisticated dial to the mechanics within. The Hour Vision is aptly named: the beauty of the movement is clearly visible through sapphire glass apertures in the side of the watchcase and through the sapphire crystal case back.',
            'stock': 3,
            'category': 'Fashion',
            'shopname': 'Nos encanta la moda',
            'airportName': 'Madrid Barajas Airport',
            'address': 'Lot 96',
            'operatinghour': 'Mon-Sun	08.00 - 22.00'
        }, {
            'id': 'PD34',
            'index': 33,
            'name': 'OAKLEY At Sunglass Hut OO9039',
            'price': '130.00',
            'currency': 'EUR',
            'description': 'Devoted to making the best sunglasses on the planet by letting invention lead the way. With a passion to reinvent from scratch, Oakley sunglasses defy convention and set the standard for design, performance, and protection by wrapping innovation in art.',
            'stock': 20,
            'category': 'Fashion',
            'shopname': 'Nos encanta la moda',
            'airportName': 'Madrid Barajas Airport',
            'address': 'Lot 96',
            'operatinghour': 'Mon-Sun	08.00 - 22.00'
        }, {
            'id': 'PD35',
            'index': 34,
            'name': 'PRADA At Sunglass Hut PR 27LS',
            'price': '200.00',
            'currency': 'EUR',
            'description': 'Get it here. Get it now. With an exclusive Sunglass Hut style, oval, brown plastic frame has brown polarized lenses and features classic branding at each temple. You always were something special.',
            'stock': 15,
            'category': 'Fashion',
            'shopname': 'Nos encanta la moda',
            'airportName': 'Madrid Barajas Airport',
            'address': 'Lot 96',
            'operatinghour': 'Mon-Sun	08.00 - 22.00'
        }
    ];

    $scope.buyitem = function(productid) {
        var counter = productid;
        if (confirm("Are you sure that you would like to purchase this item?") == true) {
            if ($scope.product[counter].stock > 0) {
                var person = prompt("Please enter your name." + "\n" + "*Kindly ensure pop-up windows are not disabled during the purchasing process.*");
                if (person != "" && person != null) {

                    var referenceCode = 'BB-010-' + person;
                    $scope.product[counter].stock = $scope.product[counter].stock - 1;
                    alert("Purchase is successfully made." + "\n" + "Your purchase reference code is " + referenceCode + "." + "\n" +"Payment will be made while you retrieve the goods at the shop. Thanks for shopping with us. ");
                } else {
                    alert("Please insert your name to make purchase.");
                }
            } else {
                alert("Product has been sold out. Sorry.");
            }
        } else {
            alert("Purchase is cancelled.");
        }
    };

    $scope.showmap = function(pruductid) {
        var index = pruductid;
        if ($scope.product[index].shopname == 'Perfume For You') {
            window.open("london4B.png", "_blank");
        } else if ($scope.product[index].shopname == 'Travelers shop') {
            window.open("kliaLot10.gif", "_blank");
        } else if ($scope.product[index].shopname == 'Come and Smell') {
            window.open("beijingB4.jpg", "_blank");
        } else if ($scope.product[index].shopname == 'Senses') {
            window.open("oslo42.png", "_blank");
        } else if ($scope.product[index].shopname == 'Hola sentidos') {
            window.open("madrid98.png", "_blank");
        } else if ($scope.product[index].shopname == 'Heathrow Boutique') {
            window.open("london2C.png", "_blank");
        } else if ($scope.product[index].shopname == 'Tik-tok') {
            window.open("kliaLot56.gif", "_blank");
        } else if ($scope.product[index].shopname == 'Looking good') {
            window.open("beijingC5.jpg", "_blank");
        } else if ($scope.product[index].shopname == 'Watch me') {
            window.open("oslo44.png", "_blank");
        } else if ($scope.product[index].shopname == 'Nos encanta la moda') {
            window.open("madrid96.png", "_blank");
        }
    };
    $scope.onItemClicked = function (item) {
    item.isVisible = true;
  }
});