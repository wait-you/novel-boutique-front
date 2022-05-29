import request from '../utils/request'

export function register(params) {
    return request.post('/user/register', params);
}

export function login(params) {
    return request.post('/user/login', params);
}

export function submitFeedBack(params) {
    return request.post('/user/feedback', params);
}

export function comment(params) {
    return request.post('/user/comment',params);
}

export function deleteComment(id) {
    return request.delete(`/user/comment/${id}`);
}

export function updateComment(id,content) {
    return request.putForm(`/user/comment/${id}`,content);
}

export function getUserinfo() {
    return request.get('/user/userInfo');
}

export function updateUserInfo(params) {
    return request.put('/user',params);
}

export function updateUserPassword(params) {
    return request.post('/user/updatePassword', params)
}

export function listFeedback(page, limit) {
    return request.get(`/user/feedback/list/${page}/${limit}`)
}

export function listBookshelf(page, limit) {
    return request.get(`/user/bookshelf/list/${page}/${limit}`)
}

export function listComment(page, limit) {
    return request.get(`/user/comment/list/${page}/${limit}`)
}

export function listBookShelf(page, limit) {
    return request.get(`/user/bookshelf/list/${page}/${limit}`)
}

export function listReadHistory(page, limit) {
    return request.get(`/user/readHistory/list/${page}/${limit}`)
}

export function addToBookShelf(bookId, preContentId) {
    return request.post('/user/bookshelf', { bookId, preContentId })
}

export function removeFromShelf(bookId) {
    return request.delete(`/user/bookshelf/${bookId}`)
}

export function getBookshelfStatus(bookId) {
    return request.post('/user/bookshelf_status', bookId)
}

export function addReadHistory(bookId, preContentId){
    return request.post('/user/readHistory', {bookId, preContentId})
}