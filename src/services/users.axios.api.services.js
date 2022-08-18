import { axiosIntance } from "./axios.api.services";

const getUsers=()=>axiosIntance.get('/users').then(value=>{
    return value;
}) 
const getUserPost=(id)=>axiosIntance.get(`/users/${id}/posts`).then(value=>{
    return value;
}) 


export {getUsers,getUserPost};