import axiosServices from "../api/axiosServices";

export const addResumeAPI = async(reqBody)=>{
    return await axiosServices('POST','/resumes',reqBody)
}