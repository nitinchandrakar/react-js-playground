import React from "react";
import "../component-styles.css";

const Card = ({ url }) => {

  const handlePlayBack = (e) =>{
    const videoEl = e.target;
    if(videoEl.paused){
      videoEl.play();
    }else{
      videoEl.pause();
    }
  }
  return (
    <div className="card">
      <div className="card-content">
        <video src={url} loop autoPlay={true} onClick={handlePlayBack}/>
      </div>
    </div>
  );
};

export default Card;
