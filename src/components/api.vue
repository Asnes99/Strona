<script>
    export default {
        name: "api",
        memesv2: [
            {
                funny: [
                    {
                        id: 1,
                        url: "https://i.imgur.com/OGIecsq.jpg",
                        alt: "Alt",
                        cat: "Funny"
                    },
                    {
                        id: 2,
                        url: "https://i.imgur.com/1W0IxIH.jpg",
                        alt: "Alt",
                        cat: "Funny"
                    },
                    {
                        id: 4,
                        url: "https://i.imgur.com/DNFFCjF.jpg",
                        alt: "Alt",
                        cat: "Funny"
                    },
                    {
                        id: 6,
                        url: "https://i.imgur.com/l9ykNfF.gif",
                        alt: "Alt",
                        cat: "Funny"
                    },
                    {
                        id: 11,
                        url: "https://i.imgur.com/XUJgrR4.jpg",
                        alt: "Alt",
                        cat: "Funny"
                    }
                ],
                doggo: [
                    {
                        id: 3,
                        url: "https://i.imgur.com/CCDj00U.jpg",
                        alt: "Alt",
                        cat: "Doggo"
                    },
                    {
                        id: 7,
                        url: "https://i.imgur.com/nPd0bDm.png",
                        alt: "Alt",
                        cat: "Doggo"
                    },
                    {
                        id: 9,
                        url: "https://i.imgur.com/h5F53ZW.png",
                        alt: "Alt",
                        cat: "Doggo"
                    }

                ],
                jk: [
                    {
                        id: 5,
                        url: "https://i.imgur.com/6amXGTM.jpg",
                        alt: "Alt",
                        cat: "Jk"
                    },
                    {
                        id: 8,
                        url: "https://i.imgur.com/L47QGgp.jpg",
                        alt: "Alt",
                        cat: "Jk"
                    },
                    {
                        id: 10,
                        url: "https://i.imgur.com/KHpEG99.png",
                        alt: "Alt",
                        cat: "Jk"
                    }
                ]
            }
        ],
        category: [
          "Funny","Doggo","Jk"
        ],
        memes: [
            {
                id: 1,
                url: "https://i.imgur.com/OGIecsq.jpg",
                alt: "Alt",
                cat: "Funny"
            },
            {
                id: 2,
                url: "https://i.imgur.com/1W0IxIH.jpg",
                alt: "Alt",
                cat: "Funny"
            },
            {
                id: 3,
                url: "https://i.imgur.com/CCDj00U.jpg",
                alt: "Alt",
                cat: "Doggo"
            },
            {
                id: 4,
                url: "https://i.imgur.com/DNFFCjF.jpg",
                alt: "Alt",
                cat: "Funny"
            },
            {
                id: 5,
                url: "https://i.imgur.com/6amXGTM.jpg",
                alt: "Alt",
                cat: "Jk"
            },
            {
                id: 6,
                url: "https://i.imgur.com/l9ykNfF.gif",
                alt: "Alt",
                cat: "Funny"
            },
            {
                id: 7,
                url: "https://i.imgur.com/nPd0bDm.png",
                alt: "Alt",
                cat: "Doggo"
            },
            {
                id: 8,
                url: "https://i.imgur.com/L47QGgp.jpg",
                alt: "Alt",
                cat: "Jk"
            },
            {
                id: 9,
                url: "https://i.imgur.com/h5F53ZW.png",
                alt: "Alt",
                cat: "Doggo"
            },
            {
                id: 10,
                url: "https://i.imgur.com/KHpEG99.png",
                alt: "Alt",
                cat: "Jk"
            },
            {
                id: 11,
                url: "https://i.imgur.com/XUJgrR4.jpg",
                alt: "Alt",
                cat: "Funny"
            }
        ],

        // initMemes(reqCat = "all") {
        //     const ret = []
        //
        //     for (let prop in this.memes) {
        //         if(this.memes[prop].cat == reqCat || reqCat == "all") { //niedokończone
        //             ret.push(this.memes[prop])
        //         }
        //     }
        //     console.log(ret)
        //     return ret
        // },
    }
</script>