import api from "../library/api";

export const FETCHING_WEATHER = "FETCH_WEATHER";
export const FETCHING_WEATHER_SUCCESS = "FETCHING_WEATHER_SUCCESS";
export const FETCHING_WEATHER_FAILURE = "FETCHING_WEATHER_FAILURE";

function fetchingWeather() {
  return {
    type: FETCHING_WEATHER
  };
}

function fetchingWeatherSuccess() {
  return {
    type: FETCHING_WEATHER_SUCCESS
  };
}

function fetchingWeatherFailure() {
  return {
    type: FETCHING_WEATHER_FAILURE
  };
}

export function fetchWeather(city) {
  return dispatch => {
    dispatch(fetchingWeather());
    return api
      .get("/forecast", { params: { q: city } })
      .then(res => {
        dispatch(fetchingWeatherSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchingWeatherFailure(err.response));
        throw err.response;
      });
  };
}
