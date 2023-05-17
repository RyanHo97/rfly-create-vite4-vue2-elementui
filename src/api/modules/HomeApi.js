import service from '../index.js'
/**
 * AXIOS MODULE SAMPLE
 */

var parameters = {}

export default {
    getDataList: (data) => {
        return service({
            method: 'get',
            url: "test",
            data: JSON.stringify(parameters),
            dataType: "json",
            contentType: 'application/json;charset=UTF-8',
        }).then(response => {
            // 成功时的回调函数
            console.log('请求成功', response)
            return response.data
        }).catch(error => {
            // 失败时的回调函数
            console.log('请求失败', error)
            return Promise.reject(error)
        })
    }
}