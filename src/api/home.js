import request  from "./http";
// 获取轮播图图片
export function getBanners(params){
    return request({
        url:"http://www.kangliuyong.com:10002/banner",
        method:"get",
        params
    })
}

//查看热卖推荐
export function getHotProducts(params){
    return request({
        url:"http://www.kangliuyong.com:10002/typeProducts",
        method:"get",
        params
    })
}