const data = `{
    "saltwater": [
        {
            "name": "Clown fish",
            "price": 24,
            "info": {
                "maxSize": 11,
                "minSize": 4,
                "maxAge": 15,
                "communityFish": false,
                "behaviour": "friendly",
                "food": [
                    "Coral"
                ],
                "image": "img/saltwater/clownfish.jpg",
                "description": "Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion. In the wild, they all form symbiotic mutualisms with sea anemones. Depending on species, anemonefish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches."
            },
            "enemies": [
                "sharks",
                "eels"
            ]
        }
    ],
    "freshwater": [
        {
            "name": "Guppy",
            "price": 3,
            "info": {
                "maxSize": 5,
                "minSize": 1,
                "maxAge": 4,
                "communityFish": true,
                "behaviour": "friendly",
                "food": [
                    "Plants"
                ],
                "image": "img/freshwater/guppy.jpg",
                "description": "The Guppy is a popular breed among new aquarium enthusiasts, because it doesn’t need too much special knowledge, to care for it. All you need for it, is a simple freshwater tank, with multiple plants and substrate."
            },
            "enemies": [
                "Platy",
                "Molly"
            ]
        },
        {
            "name": "Platy",
            "price": 6,
            "info": {
                "maxSize": 5,
                "minSize": 2,
                "maxAge": 5,
                "communityFish": true,
                "behaviour": "friendly",
                "food": [
                    "Plants",
                    "Meat"
                ],
                "image": "img/freshwater/platy.jpg",
                "description": "The Platy Fish, is another great choice for beginner fish keepers. It is a breed, that you can care for easily, and looks great in pretty much any community tank, due to its peaceful nature."
            },
            "enemies": [
                "Guppy",
                "Molly"
            ]
        },
        {
            "name": "Molly",
            "price": 8,
            "info": {
                "maxSize": 6,
                "minSize": 3,
                "maxAge": 10,
                "communityFish": true,
                "behaviour": "aggressive",
                "food": [
                    "Plants",
                    "Meat"
                ],
                "image": "img/freshwater/molly.jpg",
                "description": "The Mollies are a great choice for both beginner and veteran fish keepers. They are easy to care for and also, any Molly will look great in your freshwater tank. Usually, Mollies are community fish, so they will behave peacefully, when kept together with others."
            },
            "enemies": [
                "Guppy",
                "Molly"
            ]
        }
    ],
    "products": [
        {
            "name": "Freshwater Flakes",
            "brand": "Omega One",
            "image": "img/products/freshflakes.png",
            "description": "Yummy fish flakes for freshwater fish.",
            "price": 5
        },
        {
            "name": "Super color sinking Pellets",
            "brand": "Omega One",
            "image": "img/products/superflakes.png",
            "description": "Yummy sinking coloured fish flakes.",
            "price": 9
        }
    ]
}`;