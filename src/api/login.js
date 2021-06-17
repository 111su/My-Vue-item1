import request  from "./http";
// // 查看登录接口
export function getLogin(params){
    return request({
        url:"http://www.kangliuyong.com:10002/login",
        method:"post",
        params
    })
}

// 检查密码
export function getPassword(params){
    return request({
        url:"captcha/sent",
        method:"get",
        params
    })
}

// 验证验证码
export function getCaptchaVerify(params){
    return request({
        url:"captcha/verify",
        method:"get",
        params
    })
}