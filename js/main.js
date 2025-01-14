'use strict'

const HTML = document.documentElement

document.querySelector('.search-btn').addEventListener('click', () =>{
    getWiki('suicide silence').then(wikiInfo => {
        // console.log(wikiInfo);
        renderWikiInfo(wikiInfo)
    })

    getYt('suicide silence').then(ytInfo => {
        console.log(ytInfo)
        renderYtTopResults(ytInfo)
    })
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

function renderYtTopResults(ytInfo){
    let resultsContainer = document.createElement('div')

    ytInfo.forEach(video => {
        let resultContainer = document.createElement('div')
        let resultTitle = document.createElement('h4')
        let vidImg = document.createElement('img')

        resultContainer.dataset.url = `${video.url}`
        resultContainer.classList.add('result-container')
        
        resultTitle.innerText = video.thumbnail
        resultTitle.classList.add('result-header')

        vidImg.src = video.snippet.url
        console.log(video.snippet.width)
        vidImg.style.width = `${video.snippet.width}px`
        vidImg.style.width = `${video.snippet.height}px`

        resultContainer.append(vidImg, resultTitle)

        resultsContainer.append(resultContainer)
    });
    document.querySelector('.main-results').append(resultsContainer)
}