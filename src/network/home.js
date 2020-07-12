import request from  '../network/request';

export function getHomeMultidata(){
    return request({
        url:"http://152.136.185.210:8000/api/n3/home/multidata"
    })
}
