import axios from 'axios'

export const authApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  /*
    `withCredentials` indicates whether or not cross-site
    Access-Control requests should be made using credentials

    You need to set withCredentials: true in the Axios config for 
    the browser to include the cookies along with the requests. 
  */
  withCredentials: false,
})
