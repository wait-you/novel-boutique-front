import request from '../utils/request'

const baseUrl = 'front/home/'

export function listHomeBooks() {
    return request.get(`${baseUrl}/books`);
}

export function listHomeFriendLinks() {
    return request.get(`${baseUrl}/friend_Link/list`);
}

