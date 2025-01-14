'use strict'

const YT_API_KEY = 'AIzaSyB0a7bAEbQ5oVHpwBYsR_2H9eg9nWoLNlQ'

function getYt(SearchStr){
    const url = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
&videoEmbeddable=true&type=video&key=${YT_API_KEY}&q=${SearchStr}`)


    return url.then(res => {
        console.log(res)
    })
}