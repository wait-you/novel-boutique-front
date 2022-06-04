import request from '../utils/request'

const baseUrl = "front/book"

export function listCategorys(params) {
    return request.get(`${baseUrl}/category/list`, { params });
}

export function searchBooks(params) {
    return request.get(`${baseUrl}/search_list`, { params });
}

export function getBookById(bookId) {
    return request.get(`${baseUrl}/${bookId}`);
}

export function addVisitCount(params) {
    return request.post(`${baseUrl}/visit`, params);
}

export function getLastChapterAbout(params) {
    return request.get(`${baseUrl}/last_chapter/about`, { params });
}

export function listRecBooks(params) {
    return request.get(`${baseUrl}/rec_list`, { params });
}

export function listChapters(params) {
    return request.get(`${baseUrl}/chapter/list`, { params });
}

export function getBookContent(chapterId) {
    return request.get(`${baseUrl}/content/${chapterId}`);
}

export function getPreChapterId(chapterId) {
    return request.get(`${baseUrl}/pre_chapter_id/${chapterId}`);
}

export function getNextChapterId(chapterId) {
    return request.get(`${baseUrl}/next_chapter_id/${chapterId}`);
}

export function listVisitRankBooks() {
    return request.get(`${baseUrl}/visit_rank`);
}

export function listNewestRankBooks() {
    return request.get(`${baseUrl}/newest_rank`);
}

export function listUpdateRankBooks() {
    return request.get(`${baseUrl}/update_rank`);
}

export function listNewestComments(params) {
    return request.get(`${baseUrl}/comment/newest_list`,{ params });
}

