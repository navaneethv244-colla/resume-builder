import axios from "axios";
// axios.create() lets you create a pre-configured axios
//  instance. The instance shares the same request and response
//  API as the default axios object,
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
});

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('api request recieved');
    
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response){
      const status = error.response.status
      if(status===401){
        console.log('unauthorized error');
        
      }
      else if(status===404){
        console.log('api not found');
        
      }
      else if(status===500){
        console.log('something went wrong on server');
        
      }
      else if(error.request){
        console.log('no response fron the server');
        
      }
    }
    else{
      console.log('error',error.message);
      
    }
  
  }
);
export default axiosInstance