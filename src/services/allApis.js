import { BASE_URL } from "./base_url";
import {commonRequest} from "./commonRequest"

// to upload videos

 export const addVideos=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/videos`,body)
}

// To get all videos

export const getVideos=async()=>{
    return await commonRequest ("GET", `${BASE_URL}/videos`,'')

}

// To delete specific video

export const deletevideo=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}


// to upload category

export const addCategory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/categories`,body)
}

// To get category list


export const getCategories=async()=>{
    return await commonRequest ("GET", `${BASE_URL}/categories`,'')

}

// To delete specific category

export const deleteCategory=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}

// To get All History

export const getHistory=async()=>{
    return await commonRequest ("GET", `${BASE_URL}/watchhistory`,'')

}

// to add history

export const addHistory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/watchhistory`,body)
}

// get specific videos

export const getSpecificVideos=async(id)=>{
    return await commonRequest ("GET", `${BASE_URL}/videos/${id}`,'')

}

// to update category

export const updatecategory=async(id,body)=>{
    return await commonRequest ("PUT", `${BASE_URL}/categories/${id}`,body)

}


