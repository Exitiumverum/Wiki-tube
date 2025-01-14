'use strict'

// let gSearchText = 'beatles'


function getWiki(searchText) {
    const wikiPrm = axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${searchText}&format=json`)

    wikiPrm.then(res => {
        console.log('wiki: ', res);

    })

}