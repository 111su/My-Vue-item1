import request  from "./http";
//查看热卖推荐
export function getsearch(params){
    return request({
        url:"http://www.kangliuyong.com:10002/search",
        method:"get",
        params
    })
}