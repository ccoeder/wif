import {
  FETCHING_WEATHER,
  FETCHING_WEATHER_SUCCESS,
  FETCHING_WEATHER_FAILURE
} from "../actions/weather";

const initialState = {
  payload: [],
  isLoading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_WEATHER:
      return {
        ...state,
        payload: [],
        isLoading: true
      };
    case FETCHING_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.data
      };
    case FETCHING_WEATHER_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false
      };
  }
  return state;
}
