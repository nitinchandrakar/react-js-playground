import { useState } from "react";
import Button from "../Button";
import Input from "../Input/Input";
import List from "../List";

function TodoList() {
  const [inputValue, setInputValue] = useState();
  const [listItems, setListItems] = useState([]);

  const inputOnChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onAddHandler = () => {
    if(!inputValue)return;
    setListItems([...listItems,inputValue])
    setInputValue("");
  };

  return (
    <>
      <div className="todolist-input-container">
        <Input
          placeholder={"Enter todo"}
          onChange={inputOnChangeHandler}
          initialValue={inputValue}
        />
        <Button label={"Add"} onClickHandler={onAddHandler}></Button>
      </div>
      <div className="todolist-list-container">
        <List list={listItems}></List>
      </div>
    </>
  );
}

export default TodoList;
