const express = require('express');
const router = express.Router();

router.get('/api/music/recents', (req, res) => {
    const recentList = {
        "tracks": [
            {
                "artist": "Red Hot Chili Peppers",
                "trackName": "Californication",
                "album": "Californication (Remastered)",
                "albumCover": "https://a1.mzstatic.com/r40/Music124/v4/4c/86/1d/4c861dab-5428-f3b7-8068-82bb69db5e89/093624932130.jpg"
            },
            {
                "artist": "Yellowcard",
                "trackName": "For You, And Your Denial",
                "album": "When You're Through Thinking, Say Yes",
                "albumCover": "https://a1.mzstatic.com/r40/Music116/v4/0f/41/e3/0f41e39a-ad8f-5a63-f72f-26f310f2999b/327.jpg"
            },
            {
                "artist": "Eminem",
                "trackName": "Stan (feat. Dido)",
                "album": "The Marshall Mathers LP (25th Anniversary)",
                "albumCover": "https://a1.mzstatic.com/r40/Music211/v4/74/2c/87/742c8794-2a24-9672-dc81-bc6bd2992589/25UMGIM74636.rgb.jpg"
            },
            {
                "artist": "Simple Plan",
                "trackName": "Jet Lag (feat. Natasha Bedingfield)",
                "album": "Get Your Heart On! (Deluxe Edition)",
                "albumCover": "https://a1.mzstatic.com/r40/Music114/v4/4b/d8/13/4bd813ff-576b-8b83-c911-a357fce3e199/075679954039.jpg"
            },
            {
                "artist": "Ed Sheeran",
                "trackName": "Perfect",
                "album": "÷ (Deluxe)",
                "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/15/e6/e8/15e6e8a4-4190-6a8b-86c3-ab4a51b88288/190295851286.jpg"
            },
            {
                "artist": "Avicii",
                "trackName": "Wake Me Up",
                "album": "True",
                "albumCover": "https://a1.mzstatic.com/r40/Music125/v4/ff/cd/75/ffcd75b9-3ba3-b914-cb8d-685506998204/13UAAIM68683.rgb.jpg"
            },
            {
                "artist": "Panic! At the Disco",
                "trackName": "This is Gospel",
                "album": "Too Weird to Live, Too Rare to Die!",
                "albumCover": "https://a1.mzstatic.com/r40/Music115/v4/a1/44/5d/a1445d43-e701-65a0-dad5-3bf04ad97a5d/075679950000.jpg"
            },
            {
                "artist": "My Checmical Romance",
                "trackName": "Sing",
                "album": "Danger Days: The True Lives of the Fabulous Killjoys (Deluxe Version)",
                "albumCover": "https://a1.mzstatic.com/r40/Music124/v4/a2/28/f8/a228f8e0-57fc-0390-9fbc-f18ce33a7766/mzi.fpwdewum.jpg"
            }
        ]
    }

    res.json(recentList)
})

module.exports = router