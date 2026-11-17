import axiosInstance from "./axiosInstance";
const axiosServices = async(httpMethod,url,reqBody)=>{
    try{
        const response = await axiosInstance({
            method:httpMethod,
            url,
            data:reqBody
        })
        return response
    }
    catch(err){
        console.log('err',err);
        return err
    }
}
export default axiosServices