import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestGiphy, requestSearchFieldLazy } from "../../redux/actions";
import Card from "../Card";
import "../component-styles.css";

const CardList = () => {

  const giphy = useSelector((state) => state.requestGiphy.giphy);
  const isPending = useSelector((state) => state.requestGiphy.isPending);
  const offset = useSelector((state) => state.requestGiphy.offset);
  const totalpage = useSelector((state) => state.requestGiphy.totalpage);
  const searchField = useSelector((state) => state.requestGiphy.searchField);

  const [pageNum, setPageNum] = useState(offset);

  const [lastElement, setLastElement] = useState(null);

  const dispatch = useDispatch();

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
      setPageNum((no) => no + 1);
      }
    })
  );

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  useLayoutEffect(() => {
		if (pageNum !== offset && offset <= totalpage) {
      if(searchField){
        dispatch(requestSearchFieldLazy(searchField, offset));
      }else{
        dispatch(requestGiphy(offset));
      }
      
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageNum]);

  return (
    <div className="cardList">
      {giphy.length > 0 &&
        giphy.map((item, i) => {
          return i === giphy.length - 1 &&
            !isPending &&
            offset <= totalpage ? (
            <div key={`${item.id}`} ref={setLastElement}>
              <Card
                key={`${item.id}${i}`}
                id={item.id}
                url={item.images.original_mp4.mp4}
                title={item.title}
              />
            </div>
          ) : (
            <Card
              key={`${item.id}${i}`}
              id={item.id}
              url={item.images.original_mp4.mp4}
              title={item.title}
            />
          );
        })}
       
    </div>
  );
};

export default CardList;
