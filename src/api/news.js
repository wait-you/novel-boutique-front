import request from '../utils/request'

const baseUrl = 'front/news'

export function listLatestNews() {
    return request.get(`/${baseUrl}/latest_list`);
}

export function getNewsById(newsId) {
    return request.get(`${baseUrl}/${newsId}`);
}