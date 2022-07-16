export default function Button({ label, onClickHandler }) {
  return (
    <>
      <button onClick={onClickHandler}>{label}</button>
    </>
  );
}
