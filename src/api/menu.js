import request  from "./http";
// 获取商品类型
export function getType(params){
    return request({
        url:"http://www.kangliuyong.com:10002/type",
        method:"get",
        params
    })
}

export function getTypeProducts(params){
    return request({
        url:"http://www.kangliuyong.com:10002/typeProducts",
        method:"get",
        params
    })
}

export function getaddShopcart(params){
    return request({
        url:"http://www.kangliuyong.com:10002/addShopcart",
        method:"get",
        params
    })
}

export function getproductDetail(params){
    return request({
        url:"http://www.kangliuyong.com:10002/productDetail",
        method:"get",
        params
    })
}