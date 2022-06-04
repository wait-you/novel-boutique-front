import request from '../utils/request'

const baseUrl = 'front/user'

export function register(params) {
    return request.post(`${baseUrl}/register`, params);
}

export function login(params) {
    return request.post(`${baseUrl}/login`, params);
}

export function submitFeedBack(params) {
    return request.post(`${baseUrl}/feedback`, params);
}

export function comment(params) {
    return request.post(`${baseUrl}/comment`,params);
}

export function deleteComment(id) {
    return request.delete(`${baseUrl}/comment/${id}`);
}

export function updateComment(id,content) {
    return request.putForm(`${baseUrl}/comment/${id}`,content);
}

export function getUserinfo() {
    return request.get(`${baseUrl}/userInfo`);
}

export function updateUserInfo(params) {
    return request.put(`${baseUrl}`,params);
}

export function updateUserPassword(params) {
    return request.post(`${baseUrl}/updatePassword`, params)
}

export function listFeedback(page, limit) {
    return request.get(`${baseUrl}/feedback/list/${page}/${limit}`)
}

export function listBookshelf(page, limit) {
    return request.get(`${baseUrl}/bookshelf/list/${page}/${limit}`)
}

export function listComment(page, limit) {
    return request.get(`${baseUrl}/comment/list/${page}/${limit}`)
}

export function listBookShelf(page, limit) {
    return request.get(`${baseUrl}/bookshelf/list/${page}/${limit}`)
}

export function listReadHistory(page, limit) {
    return request.get(`${baseUrl}/readHistory/list/${page}/${limit}`)
}

export function addToBookShelf(bookId, preContentId) {
    return request.post(`${baseUrl}/bookshelf`, { bookId, preContentId })
}

export function removeFromShelf(bookId) {
    return request.delete(`${baseUrl}/bookshelf/${bookId}`)
}

export function getBookshelfStatus(bookId) {
    return request.post(`${baseUrl}/bookshelf_status`, bookId)
}

export function addReadHistory(bookId, preContentId){
    return request.post(`${baseUrl}/readHistory`, {bookId, preContentId})
}