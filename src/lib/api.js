import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
});

instance.interceptors.request.use(
  config => {
    Object.assign(config.params, {
      id: 524901,
      APPID: "4a343d427485558f09b1cda12c8056a6"
    });

    return config;
  },
  err => Promise.reject(err)
);

export default instance;
