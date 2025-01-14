'use strict'

const HTML = document.documentElement

document.querySelector('.search-btn').addEventListener('click', () =>{
    getWiki('suicide silence').then(wikiInfo => {
        // console.log(wikiInfo);
        renderWikiInfo(wikiInfo)
    })

    getYt('suicide silence')
})

function renderWikiInfo(wikiInfo){
    let wikiContainer = document.createElement('div')
    let artistHeader = document.createElement('h2')
    let artistSnippet = document.createElement('p')
    let albumHeader = document.createElement('h2')
    let albumSnippet = document.createElement('p')

    artistHeader.innerText = wikiInfo.artistTitle
    artistSnippet.innerHTML = wikiInfo.artistSnippet
    albumHeader.innerText = wikiInfo.albumTitle
    albumSnippet.innerHTML = wikiInfo.albumSnippet
    console.log(albumHeader, artistSnippet, albumHeader, albumSnippet)

    wikiContainer.append(artistHeader, artistSnippet, albumHeader, albumSnippet)

    document.querySelector('.video-wiki-content').append(wikiContainer)
    
}

function renderYtTopResults(){
    let resultContainer = document.createElement('div')
}