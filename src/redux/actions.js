import {
  REQUEST_GIPHY_PENDING,
  REQUEST_GIPHY_SUCCESS,
  REQUEST_GIPHY_FAILED,
  REQUEST_GIPHY_SEARCH_NEW,
  CHANGE_SEARCHFIELD,
  REQUEST_GIPHY_SEARCH_LAZY,
  SET_HISTORY,
  GET_HISTORY
} from "./constants";

import { config } from "../config";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const setHistoryData = (text) => ({
  type: SET_HISTORY,
  payload: text,
});

export const getHistoryData = (text) => ({
  type: GET_HISTORY
});

export const requestSearchField =
  (text, offset = 0, limit = 20) =>
  (dispatch) => {
    dispatch({ type: REQUEST_GIPHY_SEARCH_NEW });
    const apiCall = (link) => fetch(link).then((response) => response.json());
    apiCall(
      `${config.API_SEARCH}?api_key=${config.API_KEY}&limit=${limit}&offset=${offset}&q=${text}`
    )
      .then((data) => dispatch({ type: REQUEST_GIPHY_SUCCESS, payload: data }))
      .catch((error) =>
        dispatch({ type: REQUEST_GIPHY_FAILED, payload: error })
      );
  };

export const requestSearchFieldLazy =
  (text, offset = 0, limit = 20) =>
  (dispatch) => {
    dispatch({ type: REQUEST_GIPHY_SEARCH_LAZY });
    const apiCall = (link) => fetch(link).then((response) => response.json());
    apiCall(
      `${config.API_SEARCH}?api_key=${config.API_KEY}&limit=${limit}&offset=${offset}&q=${text}`
    )
      .then((data) => dispatch({ type: REQUEST_GIPHY_SUCCESS, payload: data }))
      .catch((error) =>
        dispatch({ type: REQUEST_GIPHY_FAILED, payload: error })
      );
  };

export const requestGiphy =
  (offset = 0, limit = 20) =>
  (dispatch) => {
    dispatch({ type: REQUEST_GIPHY_PENDING });
    const apiCall = (link) => fetch(link).then((response) => response.json());
    apiCall(
      `${config.API_TRENDING}?api_key=${config.API_KEY}&limit=${limit}&offset=${offset}`
    )
      .then((data) => dispatch({ type: REQUEST_GIPHY_SUCCESS, payload: data }))
      .catch((error) =>
        dispatch({ type: REQUEST_GIPHY_FAILED, payload: error })
      );
  };
