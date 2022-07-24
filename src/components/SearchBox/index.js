import React, { useMemo, useState } from "react";
import debounce from "lodash.debounce";
import "../component-styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryData } from "../../redux/actions";

const SearchBox = ({ searchChange }) => {
  const historyData = useSelector((state) => state.giphyHistory.historyList);
  const debouncedEventHandler = useMemo(() => debounce(searchChange, 1000), []);
  const [isHistory, setIsHistory] = useState(false);

  const dispatch = useDispatch();

  const handleOnFocus = ()=>{
    dispatch(getHistoryData())
    setIsHistory(true);
  }

  const handleOnBlur = ()=>{
    setIsHistory(false);
  }

  return (
    <div className="search">
      <input
        className="input-search"
        type="search"
        placeholder="search giphy"
        onChange={debouncedEventHandler}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {isHistory && historyData ? (
        <ul className="search-history">
         {
          historyData.reverse().map((list, index)=><li key={`${list}+${index}`}>{list}</li>)
         }
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBox;
