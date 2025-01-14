'use strict'

const HTML = document.documentElement
let searchText = ''

function onInit() {
    console.log('hello init')
    getYt('suicide silence').then(ytInfo => {
        console.log(ytInfo)
        renderEmbeddedVid(ytInfo)
        renderYtTopResults(ytInfo)
    })
    getWiki('suicide silence').then(wikiInfo => {
        renderWikiInfo(wikiInfo)
    })
}

document.querySelector('.input-bar').addEventListener('focus', (event) =>{
    if(event.target.value === 'search'){
        event.target.value = ''
        searchText = ''
    }
})

document.querySelector('.input-bar').addEventListener('keyup', (event) =>{
    searchText = event.target.value
    console.log(event)
    if(event.key === 'Enter'){
        destroyContent()
    getYt(searchText).then(ytInfo => {
        console.log(ytInfo)
        renderEmbeddedVid(ytInfo)
        renderYtTopResults(ytInfo)
    })
    getWiki(searchText).then(wikiInfo => {
        // console.log(wikiInfo);
        renderWikiInfo(wikiInfo)
    })
    }
})




document.querySelector('.search-btn').addEventListener('click', () => {
    destroyContent()
    getYt(searchText).then(ytInfo => {
        console.log(ytInfo)
        renderEmbeddedVid(ytInfo)
        renderYtTopResults(ytInfo)
    })
    getWiki(searchText).then(wikiInfo => {
        // console.log(wikiInfo);
        renderWikiInfo(wikiInfo)
    })

})

// document.querySelector('.result-container').addEventListener('click', (event)=> {
//     console.log(event.target)

// })

function renderWikiInfo(wikiInfo) {
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

function renderYtTopResults(ytInfo) {
    let resultsContainer = document.createElement('div')

    ytInfo.forEach(video => {
        let resultContainer = document.createElement('div')
        let resultTitle = document.createElement('h4')
        let vidImg = document.createElement('img')

        resultContainer.dataset.id = `${video.id}`
        resultContainer.classList.add('result-container')
        resultContainer.setAttribute('onclick', 'onResultClick(this)')

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

function renderEmbeddedVid(ytInfo){
    let embeddedVideo = document.createElement('iframe')
    let videoId = ytInfo.id

    document.querySelector('.video-wiki-content').innerHTML += `<iframe class="video-frame" width="560" height="315" src="https://www.youtube.com/embed/${videoId}?si=H59HqIGMBsFYggbu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    // document.querySelector('.video-wiki-content').append(embeddedVideo)


}

function onResultClick(container){
    console.log(container)
    let videoId = container.dataset.id
    document.querySelector('.video-frame').src = `https://www.youtube.com/embed/${videoId}?si=H59HqIGMBsFYggbu`
}

function destroyContent(){
    document.querySelector('.main-results').innerHTML = ''
    document.querySelector('.video-wiki-content'). innerHTML = ''
}