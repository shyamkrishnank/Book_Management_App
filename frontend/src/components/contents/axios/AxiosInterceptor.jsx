import axios from "axios";
import { toast } from "react-toastify";

const token = localStorage.getItem('auth_token')? JSON.parse(localStorage.getItem('auth_token')).access:null



export const axiosInstance = axios.create({
    baseURL:'http://127.0.0.1:8000/',
    headers:{
        'Authorization':token?`Bearer ${token}`:null,
        'Accept':'application/json',
    },
})

axiosInstance.interceptors.response.use((response)=>{
    if (response.status == 202){
        const token = response.data.tokens
        console.log(response.data)
        localStorage.setItem('auth_token',JSON.stringify(token))
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${response.data.tokens.access}`
        return response
    }
    return response

},
(error)=>{
    toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
        return Promise.reject(error)
}
)
