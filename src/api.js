export function SEARCH_VIDEOS(value) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${value}&key=AIzaSyDS4id5d4AFDUP4G9vkuwFzLCTspL9uaLw`;

    return url;
}

export function NEXT_PAGE(nextPage, value) {
    const pagination = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=searchSortUnspecified&pageToken=${nextPage}&q=${value}&type=video&key=AIzaSyDS4id5d4AFDUP4G9vkuwFzLCTspL9uaLw`;

    return pagination;
}
