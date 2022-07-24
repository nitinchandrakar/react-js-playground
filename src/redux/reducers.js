import {
  CHANGE_SEARCHFIELD,
  REQUEST_GIPHY_PENDING,
  REQUEST_GIPHY_SUCCESS,
  REQUEST_GIPHY_FAILED,
  REQUEST_GIPHY_SEARCH_NEW,
  REQUEST_GIPHY_SEARCH_SUCCESS,
  GET_HISTORY,
  SET_HISTORY,
} from "./constants";
import { combineReducers } from "redux";

const initialHistory = {
  historyList: [],
};

const initialStategiphy = {
  giphy: [],
  isPending: false,
  offset: 0,
  limit: 20,
  totalpage: 0,
  searchField: "",
};

export const giphyHistory = (state = initialHistory, action = {}) => {
  switch (action.type) {
    case GET_HISTORY:
      if (state.historyList) {
        return state;
      } else if (localStorage.getItem("searchHistory")) {
        const localArr = Array.from(localStorage.getItem("searchHistory"));
        return { ...state, historyList: localArr };
      }
      return state;
    case SET_HISTORY:
      state = { ...state, historyList: [...state.historyList, action.payload] };
      localStorage.setItem("searchHistory", state.historyList);
      return state;

    default:
      return state;
  }
};

export const requestGiphy = (state = initialStategiphy, action = {}) => {
  switch (action.type) {
    case REQUEST_GIPHY_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_GIPHY_SEARCH_NEW:
      return Object.assign({}, state, { isPending: true });
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {
        searchField: action.payload,
        isPending: true,
        offset: 0,
        totalpage: 0,
        giphy: [],
      });
    case REQUEST_GIPHY_SUCCESS:
      return Object.assign({}, state, {
        giphy: [...state.giphy, ...action.payload.data],
        isPending: false,
        offset: state.offset + 1,
        totalpage: Number.parseInt(
          action.payload.pagination.total_count / initialStategiphy.limit
        ),
      });

    case REQUEST_GIPHY_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        giphy: [...state.giphy, ...action.payload.data],
        isPending: false,
        offset: state.offset + 1,
        totalpage: Number.parseInt(
          action.payload.pagination.total_count / initialStategiphy.limit
        ),
      });

    case REQUEST_GIPHY_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

// take the 2 reducer functions and combine into 1
export const rootReducer = combineReducers({
  requestGiphy,
  giphyHistory,
});
