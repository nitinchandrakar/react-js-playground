import React, { useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import "../component-styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryData } from "../../redux/actions";

const SearchBox = ({ searchChange, onHistory }) => {
  const historyData = useSelector((state) => state.giphyHistory.historyList);
  const debouncedEventHandler = useMemo(() => debounce(searchChange, 1000), [searchChange]);
  const [isHistory, setIsHistory] = useState(false);

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleOnFocus = () => {
    dispatch(getHistoryData());
    setIsHistory(true);
  };

  const handleHistoryClick = (e) => {
    if (e.target.className === "search-history-item") {
      inputRef.current.value = e.target.textContent;

      onHistory( inputRef.current.value)
    }
  };

  const handleOnBlur = () => {
    setTimeout(() => {
      setIsHistory(false);
    }, 1000);
  };

  return (
    <div className="search">
      <input
        className="input-search"
        type="search"
        placeholder="search giphy"
        onChange={debouncedEventHandler}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={inputRef}
      />
      {isHistory && historyData && historyData.length > 0 ? (
        <ul className="search-history" onClick={handleHistoryClick}>
          {historyData.reverse().map((list, index) => (
            <li className="search-history-item" key={`${list}+${index}`}>
              {list}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBox;
