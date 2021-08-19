import axios from "axios";

const server=axios.create({
baseURL: 'http://www.omdbapi.com',
headers:{'Content-Type': 'application/json'},
//withCredentials:true


});


export default server;