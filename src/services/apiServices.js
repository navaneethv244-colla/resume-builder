import axiosServices from "../api/axiosServices";

export const addResumeAPI = async(reqBody)=>{
    return await axiosServices('POST','/resumes',reqBody)
}
export const displayResume = async()=>{
    return await axiosServices('GET','/resumes',{})
}
export const deleteResumeAPI = async(id)=>{
    return await axiosServices('DELETE',`/resumes/${id}`,{})
}
export const viewResumeAPI = async(id)=>{
    return await axiosServices('GET',`/resumes/${id}`,{})
}