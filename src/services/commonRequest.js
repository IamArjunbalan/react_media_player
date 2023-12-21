import axios from "axios";

 export const  commonRequest=async(method,url,body)=>{
    let axiosConfig={
        method,
        url,
        data:body,
        headers:{
            'Content-Type':"application/json"
        }
    }

    return await axios(axiosConfig).then((res)=>{
        return res
    }).catch(rej=>{
        return rej
    })

}