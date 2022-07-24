import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchField,
  requestGiphy,
  requestSearchField,
  setHistoryData,
} from "./redux/actions";
import "./styles.css";

// components
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { LazyLoader } from "./components/loader";

const App = () => {
  const searchField = useSelector((state) => state.requestGiphy.searchField);
  const giphy = useSelector((state) => state.requestGiphy.giphy);
  const isPending = useSelector((state) => state.requestGiphy.isPending);
  const offset = useSelector((state) => state.requestGiphy.offset);
  const limit = useSelector((state) => state.requestGiphy.limit);
  const totalpage = useSelector((state) => state.requestGiphy.totalpage);

  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    dispatch(setSearchField(e.target.value));
    // eslint-disable-next-line eqeqeq
    if (e.target.value == "") {
      dispatch(requestGiphy(0, limit));
    } else if (searchField && searchField === e.target.value) {
      dispatch(requestSearchField(searchField, offset, limit));
    }
    if (e.target.value !== "") {
      dispatch(setHistoryData(e.target.value));
    }
  };

  const onHistory = (e) => {
    dispatch(setSearchField(e));
    // eslint-disable-next-line eqeqeq
    if (e == "") {
      dispatch(requestGiphy(0, limit));
    }
  };

  useEffect(() => {
    dispatch(requestGiphy(offset, limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchField) {
      dispatch(requestSearchField(searchField, offset, limit));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchField]);

  return (
    <div className="body">
      <div className="stickyHeader">
        <h1 className="f1">Giphy Search</h1>
        <SearchBox searchChange={onSearchChange} onHistory={onHistory} />
      </div>
      {giphy && giphy.length > 0 ? (
        <>
          {" "}
          <CardList />
          {isPending || offset <= totalpage ? <LazyLoader /> : ""}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
