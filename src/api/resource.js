import request from '../utils/request'

const baseUrl = 'front/resource'

export function getImgVerifyCode() {
    return request.get(`${baseUrl}/img_verify_code`);
}

export function uploadImg(file) {
    return request.post(
        `${baseUrl}`
    )
}
