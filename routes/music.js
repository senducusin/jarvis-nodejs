const express = require('express');
const router = express.Router();
const { v4: uuidv4, NIL } = require('uuid');

const rockMusic = [
    {
        "id": uuidv4(),
        "artist": "All Time Low",
        "trackName": "The Weather",
        "album": "The Weather",
        "albumCover": "https://a1.mzstatic.com/r40/Music221/v4/65/a3/fb/65a3fbc5-9bfc-0019-61b6-59cec4c6f0fa/634707771668_Cover.jpg",
        "genre": "rock"
    },
    {
        "id": uuidv4(),
        "artist": "Evanescence",
        "trackName": "Bring Me to Life",
        "album": "Fallen",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/10/4c/21/104c21e6-9ef0-4d3a-d1bd-d47167f121e5/00601501406300.rgb.jpg",
        "genre": "rock"
    },
    {
        "id": uuidv4(),
        "artist": "Green Day",
        "trackName": "Boulevard of Broken Dreams",
        "album": "American Idiot",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/0e/17/f0/0e17f011-aadf-d4d1-1c7e-b61ce39f968b/093624947301.jpg",
        "genre": "rock"
    },
    {
        "id": uuidv4(),
        "artist": "Green Day",
        "trackName": "Boulevard of Broken Dreams",
        "album": "American Idiot",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/0e/17/f0/0e17f011-aadf-d4d1-1c7e-b61ce39f968b/093624947301.jpg",
        "genre": "rock"
    },
    {
        "id": uuidv4(),
        "artist": "Yellowcard",
        "trackName": "For You, And Your Denial",
        "album": "When You're Through Thinking, Say Yes",
        "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/0f/41/e3/0f41e39a-ad8f-5a63-f72f-26f310f2999b/327.jpg",
        "genre": "rock"
    },
    {
        "id": uuidv4(),
        "artist": "Linkin Park",
        "trackName": "Numb",
        "album": "Meteora (Deluxe Edition)",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/13/44/05/134405bd-9e27-a678-8953-b5f724201f95/093624948988.jpg",
        "genre": "rock"
    },
    {
        "id": uuidv4(),
        "artist": "Nickleback",
        "trackName": "Rockstar",
        "album": "All the Right Reasons",
        "albumCover": "https://a1.mzstatic.com/r40/Music114/v4/f8/e0/db/f8e0db52-f6e5-5d85-6e0a-ae73e5caab11/mzi.qohxegpg.jpg",
        "genre": "rock"
    },
    {
        "id": uuidv4(),
        "artist": "The Used",
        "trackName": "The Taste of Ink",
        "album": "The Used",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/93/83/0c/93830c2c-54b8-2304-0930-e3de5e9a1ed4/093624828723.jpg",
        "genre": "rock"
    }
]

const loveMusic = [
    {  
        "id": uuidv4(),
        "artist": "Teenage Dream",
        "trackName": "Katy Perry",
        "album": "Teenage Dream (Deluxe Edition)",
        "albumCover": "https://a1.mzstatic.com/r40/Music126/v4/75/97/31/759731eb-b429-dfe3-c41f-34435998d102/13UABIM57845.rgb.jpg",
        "genre": "romance"
    },
    {
        "id": uuidv4(),
        "artist": "Ed Sheeran",
        "trackName": "Perfect",
        "album": "÷ (Deluxe)",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg",
        "genre": "romance"
    },
    {
        "id": uuidv4(),
        "artist": "Taylor Swift",
        "trackName": "Delicate",
        "album": "reputation",
        "albumCover": "https://a1.mzstatic.com/r40/Music211/v4/34/2a/32/342a32e5-d708-a7e6-7cbf-fe4cf629a989/18OPBMR00186.rgb.jpg",
        "genre": "romance"
    },
    {
        "id": uuidv4(),
        "artist": "Rihanna",
        "trackName": "Stay (feat. Mikky Ekko)",
        "album": "Unapologetic (Deluxe Version)",
        "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/ef/3e/8a/ef3e8aaa-18b7-3ae3-8020-f5fc384b0bf2/12UMGIM59889.rgb.jpg",
        "genre": "romance"
    },
    {
        "id": uuidv4(),
        "artist": "Bruno Mars",
        "trackName": "Grenade",
        "album": "Doo-Wops & Hooligans (Deluxe)",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/98/ae/c2/98aec2e1-3be4-0311-1b44-69348fc87abb/075679956484.jpg",
        "genre": "romance"
    },
    {
        "id": uuidv4(),
        "artist": "Ellie Goulding",
        "trackName": "Your Song",
        "album": "Songbook For Christmas",
        "albumCover": "https://a1.mzstatic.com/r40/Music126/v4/50/a6/2f/50a62f41-2253-1c2a-572e-a5065de9fa37/23UM1IM57360.rgb.jpg",
        "genre": "romance"
    },
    {
        "id": uuidv4(),
        "artist": "Lady Gaga, Bradley Cooper",
        "trackName": "Shallow (Radio Edit)",
        "album": "A Star Is Born Soundtrack",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/b1/9f/ef/b19fef51-79de-a940-e8ab-9e4e07b04d96/18UMGIM53752.rgb.jpg",
        "genre": "romance"
    },
    {
        "id": uuidv4(),
        "artist": "Coldplay",
        "trackName": "A Sky Full of Stars",
        "album": "Ghost Stories",
        "albumCover": "https://a1.mzstatic.com/r40/Features125/v4/60/90/ad/6090adc3-8863-861d-afcc-23c55c6fe5da/dj.vmtulfyu.jpg",
        "genre": "romance"
    }
]

const hipHopMusic = [
    {
        "id": uuidv4(),
        "artist": "Eminem",
        "trackName": "Stan (feat. Dido)",
        "album": "The Marshall Mathers LP (25th Anniversary)",
        "albumCover": "https://a1.mzstatic.com/r40/Music211/v4/74/2c/87/742c8794-2a24-9672-dc81-bc6bd2992589/25UMGIM74636.rgb.jpg",
        "genre": "hip-hop"
    },
    {
        "id": uuidv4(),
        "artist": "Snoop Dogg, Dr. Dre, 50 Cent, Eminem",
        "trackName": "Gunz N Smoke",
        "album": "Missionary",
        "albumCover": "https://a1.mzstatic.com/r40/Music221/v4/b3/3b/df/b33bdfe9-31bb-0be6-a05d-15a5d04bb7f5/24UM1IM36999.rgb.jpg",
        "genre": "hip-hop"
    },
    {
        "id": uuidv4(),
        "artist": "Ez Mil",
        "trackName": "Up Down (Step & Walk)",
        "album": "DU4LI7Y",
        "albumCover": "https://a1.mzstatic.com/r40/Music122/v4/f0/77/9f/f0779f66-7a49-0af8-d2b4-e41616f7760b/22UMGIM70801.rgb.jpg",
        "genre": "hip-hop"
    },
    {
        "id": uuidv4(),
        "artist": "50 Cent",
        "trackName": "In da Club",
        "album": "Get Rich or Die Tryin'",
        "albumCover": "https://a1.mzstatic.com/r40/Music112/v4/10/a1/9f/10a19f83-a2f3-40c2-858d-b3d612e251bd/06UMGIM31218.rgb.jpg",
        "genre": "hip-hop"
    },
    {
        "id": uuidv4(),
        "artist": "Juice WRLD",
        "trackName": "Lace It",
        "album": "The Party Never Ends 2.0",
        "albumCover": "https://a1.mzstatic.com/r40/Music221/v4/bb/79/3d/bb793d2e-ff8e-576c-1ce7-1dd1ae82bd95/24UM1IM10947.rgb.jpg",
        "genre": "hip-hop"
    },
    {
        "id": uuidv4(),
        "artist": "2Pac",
        "trackName": "Life Goes On",
        "album": "Greatest Hits",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/aa/07/db/aa07db20-0b14-d09c-ead7-5b9e3680cb76/00602527051840.rgb.jpg",
        "genre": "hip-hop"
    },
    {
        "id": uuidv4(),
        "artist": "Coolio",
        "trackName": "Gangsta's Paradise (feat. L.V.)",
        "album": "Gangsta's Paradise",
        "albumCover": "https://a1.mzstatic.com/r40/Music211/v4/c2/23/0b/c2230b5f-e753-e9b0-c032-b9ea0713450f/016998513262.png",
        "genre": "hip-hop"
    },
    {
        "id": uuidv4(),
        "artist": "Fort Minor",
        "trackName": "Remember the Name (feat. Styles of Beyond)",
        "album": "The Rising Tied (Deluxe Edition)",
        "albumCover": "https://a1.mzstatic.com/r40/Music124/v4/e8/e3/fd/e8e3fd40-94e1-5637-01fc-f852a24a61ee/093624992066.jpg",
        "genre": "hip-hop"
    }
]

const popMusic = [
    {
        "id": uuidv4(),
        "artist": "Shawn Mendes & Justin Bieber",
        "trackName": "Monster",
        "album": "Wonder",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/d5/f0/d2/d5f0d270-fc16-5691-d83e-917c067a6561/20UMGIM83351.rgb.jpg",
        "genre": "pop"
    },
    {
        "id": uuidv4(),
        "artist": "Shawn Mendes & Justin Bieber",
        "trackName": "Monster",
        "album": "Wonder",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/d5/f0/d2/d5f0d270-fc16-5691-d83e-917c067a6561/20UMGIM83351.rgb.jpg",
        "genre": "pop"
    },
    {
        "id": uuidv4(),
        "artist": "twenty one pilots",
        "trackName": "Stressed Out",
        "album": "Blurryface",
        "albumCover": "https://a1.mzstatic.com/r40/Music211/v4/8e/e2/89/8ee28904-0821-610d-5011-a61845f62756/075679926951.jpg",
        "genre": "pop"
    },
    {
        "id": uuidv4(),
        "artist": "twenty one pilots",
        "trackName": "Stressed Out",
        "album": "Blurryface",
        "albumCover": "https://a1.mzstatic.com/r40/Music211/v4/8e/e2/89/8ee28904-0821-610d-5011-a61845f62756/075679926951.jpg",
        "genre": "pop"
    },
    {
        "id": uuidv4(),
        "artist": "Ariana Grande",
        "trackName": "pov",
        "album": "Positions (Deluxe Edition)",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/18/75/d5/1875d587-3892-c732-8edb-e864c5a53b5b/21UMGIM11942.rgb.jpg",
        "genre": "pop"
    },
    {
        "id": uuidv4(),
        "artist": "Billie Eilish",
        "trackName": "Getting Older",
        "album": "Happier Then Ever",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/98/ae/d1/98aed10c-b8dc-8e27-7e88-935cf0ff5acb/21UMGIM36691.rgb.jpg",
        "genre": "pop"
    },
    {
        "id": uuidv4(),
        "artist": "Taylor Swift",
        "trackName": "Cruel Summer",
        "album": "Lover",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg",
        "genre": "pop"
    },
    {
        "id": uuidv4(),
        "artist": "The Weeknd",
        "trackName": "Starboy (feat. Daft Punk)",
        "album": "Starboy",
        "albumCover": "https://a1.mzstatic.com/r40/Music126/v4/02/17/ce/0217ce34-c2b9-3d3d-1dec-586db3948753/23UMGIM22526.rgb.jpg",
        "genre": "pop"
    },
    {
        "id": uuidv4(),
        "artist": "Teddy Swims",
        "trackName": "Bed on Fire",
        "album": "Unlearning",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/82/af/5f/82af5faf-fb1c-eb10-9512-bf311d31258a/093624880448.jpg",
        "genre": "pop"
    }
]

const jazzMusic = [
    {
        "id": uuidv4(),
        "artist": "Gregg Karukas",
        "trackName": "Girl in the Red Dress",
        "album": "Looking Up",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/e7/b1/b2/e7b1b2bf-46b7-9725-eabb-09d4786b324a/mzi.xqgythsv.jpg",
        "genre": "jazz"
    },
    {
        "id": uuidv4(),
        "artist": "John Klemmer",
        "trackName": "Touch (feat. Dave Grusin & Larry Carlton)",
        "album": "Touch",
        "albumCover": "https://a1.mzstatic.com/r40/Music118/v4/a5/52/a0/a552a018-a2a5-bd10-922b-38da7bb7b836/00076741715220.rgb.jpg",
        "genre": "jazz"
    },
    {
        "id": uuidv4(),
        "artist": "Bobby Caldwell",
        "trackName": "What You Won't Do for Love",
        "album": "What You Won't Do for Love",
        "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/c8/fa/e4/c8fae494-e846-e8c2-b831-4d1ae0e8f83a/VEATP-41293.jpg",
        "genre": "jazz"
    },
    {
        "id": uuidv4(),
        "artist": "Peter White",
        "trackName": "Bueno Funk",
        "album": "Glow",
        "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/40/1a/40/401a4002-7c8e-d04f-980e-181a0e271dbf/mzi.kcpktczg.jpg",
        "genre": "jazz"
    },
    {
        "id": uuidv4(),
        "artist": "Lindsey Webster",
        "trackName": "Fool Me Once",
        "album": "You Change",
        "albumCover": "https://a1.mzstatic.com/r40/Music126/v4/3d/54/b0/3d54b0da-d5fa-1cf0-181f-a948e286aaf1/888295293426.jpg",
        "genre": "jazz"
    },
    {
        "id": uuidv4(),
        "artist": "Kim Waters",
        "trackName": "After Midnight",
        "album": "From the Heart",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/d1/8a/5c/d18a5caf-e1e3-eb7c-0e00-5c7ad102b0c9/00016351508027_Cover.jpg",
        "genre": "jazz"
    },
    {
        "id": uuidv4(),
        "artist": "Rick Braun",
        "trackName": "Cadillac Slim",
        "album": "Beat Street",
        "albumCover": "https://a1.mzstatic.com/r40/Music124/v4/77/a7/74/77a774a1-ecd5-c756-2e1e-0716ea7c9c55/mzi.mgrsqegx.jpg",
        "genre": "jazz"
    },
    {
        "id": uuidv4(),
        "artist": "Norman Brown",
        "trackName": "It Keeps Coming Back",
        "album": "Let It Go",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/c9/4a/c4/c94ac4de-55bb-64c7-d1ba-b1e59ef2cf47/00016351544629_Cover.jpg",
        "genre": "jazz"
    }
]

const acousticMusic = [
    {
        "id": uuidv4(),
        "artist": "The Script",
        "trackName": "The Man Who Can't Be Moved (Acoustic)",
        "album": "Acoustic Sessions - EP",
        "albumCover": "https://a1.mzstatic.com/r40/Music124/v4/a8/b5/37/a8b53787-9747-481c-a9d2-4b8aa176c25a/886447003398.jpg",
        "genre": "acoustic"
    },
    {
        "id": uuidv4(),
        "artist": "Taking Back Sunday",
        "trackName": "Cute Without the E - Cut From the Team",
        "album": "Punk Goes Acoustic",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/74/aa/b2/74aab273-dc05-6169-fa30-23eceef3d677/00888072002869.rgb.jpg",
        "genre": "acoustic"
    },
    {
        "id": uuidv4(),
        "artist": "Olivia Rodrigo",
        "trackName": "traitor",
        "album": "SOUR",
        "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/ce/63/06/ce6306bb-5830-af8f-8ebd-4eb7d3c14e1e/21UMGIM26092.rgb.jpg",
        "genre": "acoustic"
    },
    {
        "id": uuidv4(),
        "artist": "The Wanted",
        "trackName": "Glad You Came (Acoustic)",
        "album": "Most Wanted: The Greatest Hits (Extended Deluxe)",
        "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/23/ce/48/23ce48c8-b96a-f4e6-df19-c49dcc6a6601/21UMGIM85950.rgb.jpg",
        "genre": "acoustic"
    },
    {
        "id": uuidv4(),
        "artist": "Stephen Speaks",
        "trackName": "Passenger Seat (Acoustic)",
        "album": "No More Doubt",
        "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/31/27/2f/31272f11-8390-8056-140c-c63294494f76/cover.jpg",
        "genre": "acoustic"
    },
    {
        "id": uuidv4(),
        "artist": "Charlie Puth",
        "trackName": "Light Switch (Acoustic)",
        "album": "Light Switch (Acoustic) - Single",
        "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/2a/72/8c/2a728c0a-e5d2-80a3-6549-e75b7a21dd7f/075679756015.jpg",
        "genre": "acoustic"
    },
    {
        "id": uuidv4(),
        "artist": "Lewis Capaldi",
        "trackName": "Before You Go",
        "album": "Divinely Uninspred To A Hellish Extent",
        "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/9f/58/7c/9f587c97-f0e9-e335-d8e2-60b8e2d62bad/19UMGIM90850.rgb.jpg",
        "genre": "acoustic"
    },
    {
        "id": uuidv4(),
        "artist": "Lady Gaga, Bruno Mars",
        "trackName": "Die With A Smile (Acoustic)",
        "album": "Die With A Smile (Acoustic) - Single",
        "albumCover": "https://a1.mzstatic.com/r40/Music221/v4/30/a8/78/30a87869-f9fb-bf53-e0ba-91ffe8c03f31/24UM1IM23004.rgb.jpg",
        "genre": "acoustic"
    }
]

router.get('api/music/all', (req, res) => {
    const trackCollection = {
        "tracks": [
        ...rockMusic,
        ...loveMusic,
        ...hipHopMusic,
        ...popMusic,
        ...jazzMusic,
        ...acousticMusic
    ]
}

    res.json(trackCollection)
})

router.get('/api/music/recents', (req, res) => {
    const recentList = {
        "tracks": [
            {
                "id": uuidv4(),
                "artist": "Red Hot Chili Peppers",
                "trackName": "Californication",
                "album": "Californication (Remastered)",
                "albumCover": "https://a1.mzstatic.com/r40/Music124/v4/4c/86/1d/4c861dab-5428-f3b7-8068-82bb69db5e89/093624932130.jpg",
                "genre": "rock"
            },
            {
                "id": uuidv4(),
                "artist": "Yellowcard",
                "trackName": "For You, And Your Denial",
                "album": "When You're Through Thinking, Say Yes",
                "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/0f/41/e3/0f41e39a-ad8f-5a63-f72f-26f310f2999b/327.jpg",
                "genre": "rock"
            },
            {
                "id": uuidv4(),
                "artist": "Eminem",
                "trackName": "Stan (feat. Dido)",
                "album": "The Marshall Mathers LP (25th Anniversary)",
                "albumCover": "https://a1.mzstatic.com/r40/Music211/v4/74/2c/87/742c8794-2a24-9672-dc81-bc6bd2992589/25UMGIM74636.rgb.jpg",
                "genre": "hip-hop"
            },
            {
                "id": uuidv4(),
                "artist": "Simple Plan",
                "trackName": "Jet Lag (feat. Natasha Bedingfield)",
                "album": "Get Your Heart On! (Deluxe Edition)",
                "albumCover": "https://a1.mzstatic.com/r40/Music114/v4/4b/d8/13/4bd813ff-576b-8b83-c911-a357fce3e199/075679954039.jpg",
                "genre": "rock"
            },
            {
                "id": uuidv4(),
                "artist": "Ed Sheeran",
                "trackName": "Perfect",
                "album": "÷ (Deluxe)",
                "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg",
                "genre": "romance"
            },
            {
                "id": uuidv4(),
                "artist": "Avicii",
                "trackName": "Wake Me Up",
                "album": "True",
                "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/ff/cd/75/ffcd75b9-3ba3-b914-cb8d-685506998204/13UAAIM68683.rgb.jpg",
                "genre": "rock"
            },
            {
                "id": uuidv4(),
                "artist": "Panic! At the Disco",
                "trackName": "This is Gospel",
                "album": "Too Weird to Live, Too Rare to Die!",
                "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/a1/44/5d/a1445d43-e701-65a0-dad5-3bf04ad97a5d/075679950000.jpg",
                "genre": "rock"
            },
            {
                "id": uuidv4(),
                "artist": "My Checmical Romance",
                "trackName": "Sing",
                "album": "Danger Days: The True Lives of the Fabulous Killjoys (Deluxe Version)",
                "albumCover": "https://a1.mzstatic.com/r40/Music124/v4/a2/28/f8/a228f8e0-57fc-0390-9fbc-f18ce33a7766/mzi.fpwdewum.jpg",
                "genre": "rock"
            }
        ]
    }

    res.json(recentList)
})

module.exports = router