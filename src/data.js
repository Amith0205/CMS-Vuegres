import photo from '../src/img/images.png'
export const data = [
    {
        tagline: "Lorem Ipsum",
        status: true,
        approved:"Yes",
        company: "HUL",
        AdImage: photo,
        version: 1,
        Interactions: [
            {
                id: 1,
                msg: "Thank You",
                by: "Amith",
                createdAt: "25/11/2022, 7:41:06 pm"
            },


        ]
    }, {
        tagline: "Lorem Ipsum lorem ",
        status: false,
        approved:"",
        company: "Tata",
        AdImage: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        version: 2,
        Interactions: [
            {
                id: 1,
                msg: "Hello",
                by: "Amith",
                createdAt: "25/11/2022, 7:41:06 pm"
            },
        ]

    },
];
