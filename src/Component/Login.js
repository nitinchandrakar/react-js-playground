import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Nitin", age: 30, email: "nitin.it90@gmail.com" })
          );
        }}
      >
        Login
      </button>
      <button onClick={()=>{
        dispatch(logout())
      }}>Logout</button>
    </>
  );
}
