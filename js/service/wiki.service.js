'use strict'

// let gSearchText = 'beatles'
let gCurrWiki = {}


function getWiki(searchText) {
    const wikiPrm = axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${searchText}&format=json`)
    let wikiInfo = {}

    return wikiPrm.then(res => {
        return wikiInfo = {
            artistTitle: res.data.query.search[0].title,
            artistSnippet: res.data.query.search[1].snippet,
            albumTitle: res.data.query.search[2].title,
            albumSnippet: res.data.query.search[2].snippet
        }
        // console.log(wikiInfo)

    })
    // console.log(gCurrWiki)
}