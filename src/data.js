import photo from '../src/img/images.png'
export const data = [
    {
        tagline: "This is tagline demo line.",
        status: true,
        approved:"Yes",
        company: "HUL",
        AdImage: photo,
        version: 1,
        Interactions: [
            {
                id: 1,
                msg: "Welcome!",
                by: "user",
                createdAt: "25/11/2022, 7:41:06 pm"
            },


        ]
    }, {
        tagline: "This is tagline demo line. lorem ",
        status: false,
        approved:"",
        company: "Tata",
        AdImage: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        version: 2,
        Interactions: [
            {
                id: 1,
                msg: "Welcome!",
                by: "user",
                createdAt: "25/11/2022, 7:41:06 pm"
            },
        ]

    },
];
