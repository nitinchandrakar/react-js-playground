import { useContext } from "react";
import { AppContext } from "..";
import Child from "./Child";

export default function Parent() {
  const { userName } = useContext(AppContext);

  return (
    <>
      <div>{userName}</div>
      <Child></Child>
    </>
  );
}
