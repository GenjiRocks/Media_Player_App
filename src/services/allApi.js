import {commonApi} from "./commonApi"
import {serverUrl} from "./serverUrl"

// api to add videos
export const addVideoApi = async(reqBody)=>{
    return await  commonApi('POST',`${serverUrl}/videos`,reqBody)
 }

//  api to get all the videos
export const getVideoApi = async ()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}