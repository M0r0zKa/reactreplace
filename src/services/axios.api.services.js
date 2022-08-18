const { default: axios } = require("axios");

let baseURL = "https://jsonplaceholder.typicode.com"

let axiosIntance = axios.create({baseURL})

export{axiosIntance};