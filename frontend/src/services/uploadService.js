import API from "./api";


export const uploadFile = async(formData)=>{

    return await API.post(
        "/upload",
        formData
    )
}