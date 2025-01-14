'use strict'

const YT_API_KEY = 'AIzaSyB0a7bAEbQ5oVHpwBYsR_2H9eg9nWoLNlQ'
const YT_URL = 'https://www.youtube.com/watch?v='

function getYt(SearchStr) {
    const url = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
&videoEmbeddable=true&type=video&key=${YT_API_KEY}&q=${SearchStr}`)
    let YT_TOP_RESULTS = []

    return url.then(res => {
         res.data.items.forEach(video => {
                YT_TOP_RESULTS.push({
                thumbnail: video.snippet.description,
                id: video.id.videoId,
                snippet: video.snippet.thumbnails.default

            })
            // console.log(YT_TOP_RESULTS)
        })
        return YT_TOP_RESULTS
    })
}