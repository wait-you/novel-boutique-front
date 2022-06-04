import request from '../utils/request'

export function getAuthorStatus() {
    return request.get('/author/status');
}

export function register(params) {
    return request.post('/author/register', params);
}

export function listBooks(params) {
    return request.get(`/author/book/list/${params.page}/${params.limit}`);
}

export function publishBook(params) {
    return request.post('/author/book', params);
}

export function listChapters(bookId, pageNum, pageSize) {
    return request.get(`/author/book/chapter/list/${pageNum}/${pageSize}/${bookId}`);
}

export function publishChapter(params) {
    return request.post(`/author/book/chapter`, params);
}

export function deleteChapter(chapterId) {
    return request.delete(`/author/book/chapter/${chapterId}`)
}

export function getChapterInfo(chapterId) {
    return request.get(`/author/book/chapter/${chapterId}`)
}

export function updateChapter(params) {
    return request.put('/author/book/chapter', params)
}

export function incomeMonth(page, limit) {
    return request.get(`/author/income/month/list/${page}/${limit}`)
}

export function incomeDaily(page, limit) {
    return request.get(`/author/income/daily/list/${page}/${limit}`)
}