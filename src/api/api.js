import axios from "axios";

const apis =  axios.create({
    //baseURL: "http://localhost:3003/"
    baseURL: "http://3.35.233.188"
    //baseURL: "http://3.35.140.5/api/auth/userid"
    // baseURL: "http://3.35.140.5/api/item"

    // baseURL: "http://3.35.140.5"
})

export default apis;