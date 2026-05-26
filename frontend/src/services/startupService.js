import API from "./api";


export const createStartup = async(data)=>{

    return await API.post(
        "/create-startup",
        data
    )
}