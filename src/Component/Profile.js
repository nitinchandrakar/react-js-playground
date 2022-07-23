import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const [deg, setDeg] = useState(0);
  const [date, setDate] = useState(new Date());

  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  useEffect(() => {
    const timerId = setInterval(updateDeg, 1000);
    const dateId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
      clearInterval(dateId);
    };
  }, []);

  function refreshClock() {
    setDate(new Date());
  }

  function updateDeg() {
    setDeg(deg=>deg+1);
  }

  return (
    <>
      <h1 style={{ color: themeColor, transform: `rotate(${deg}deg)` }}>
        Profile Page {date.toLocaleTimeString()}
      </h1>
      <p>Name : {user.name}</p>
      <p>Age : {user.age} </p>
      <p>email : {user.email} </p>
    </>
  );
}

export default Profile;
