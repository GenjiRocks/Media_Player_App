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

// api to delete the video
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{}) /* Since the deleting is a single object put {} */
}

// api to video to watch history
export const addToHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

// api to get data from watchhistory
export const getHistoryApi = async ()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
    }

// api to delete from watchhistory
export const deleteFromHistoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}