import ListItem from "./ListItem";

export default function List({ list = [] }) {
  return (
    <>
      <ul>
        {list.map((item) => (
          <ListItem params={item} />
        ))}
      </ul>
    </>
  );
}
