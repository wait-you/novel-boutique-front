import request from '../utils/request'

export function getImgVerifyCode() {
    return request.get('/resource/img_verify_code');
}

export function uploadImg(file) {
    return request.post(
        '/resource/'
    )
}
