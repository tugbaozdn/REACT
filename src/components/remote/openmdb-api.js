import server from './axios-instance';

export async function titleSearch(){
    let response =await server.get(`/?apikey=9bf4ad4c&t=${title}`);
    return await response;
}