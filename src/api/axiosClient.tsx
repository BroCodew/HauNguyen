import axios from "axios";
import { log } from "console";

const axiosClient = axios.create({
  baseURL: "https://api.ezfrontend.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("error.response", error.response);
    console.log("error", error);

    const { config, data, status } = error.response;
    const errorRegister = data.message[0];
    const errorMessage = data.data[0].messages[0].message;
    // console.log("errorMessage", errorMessage);

    if (config.url === "/auth/local/register" && status === 400) {
      const dataList = data.data || [];
      const messageData = dataList.length > 0 ? dataList[0] : {};
      const errorMessage = messageData.messages || [];
      const error = errorMessage.length > 0 ? errorMessage[0] : {};
      const messagesThrow = error.message;
      throw new Error(`${messagesThrow}`);
    }
    // throw new Error(`${errorMessage}`);

    return Promise.reject(error);
  }
);
