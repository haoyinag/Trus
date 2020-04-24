import request from './request'

const api: any = request

const Methods = (method: string, url: string, params: any) => {
    return new Promise((resolve, reject) => {
        api[method](url, {
            params
        })
            .then((response: any) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            });
    })
}

const Get = (url: string, params: any) => {
    return Methods('get', url, params)
}

const Post = (url: string, params: any) => {
    return Methods('post', url, params)
}

export default { Get, Post }