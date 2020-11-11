const KEY = 'AIzaSyCok5DV8meULnGo7navFvtypm1nfBuep8E';

export function SEARCH_VIDEOS(value) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${value}&key=${KEY}`;

    return url;
}

export function NEXT_PAGE(nextPage, value) {
    const pagination = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=searchSortUnspecified&pageToken=${nextPage}&q=${value}&type=video&key=${KEY}`;

    return pagination;
}

export function VIDEO_DESCRIP(id) {
    const videoDescrip = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,statistics&key=${KEY}`;

    return videoDescrip;
}
