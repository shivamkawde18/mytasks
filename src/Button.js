function Button(props) {
  return (
    <>
      <button
        style={{ height: "3rem", width: "3rem", fontSize: "xx-large" }}
        onClick={() => {
          props.setCount(props.count + 1);
        }}
      >
        +
      </button>
      <h1>{props.count}</h1>
      <button
        style={{ height: "3rem", width: "3rem", fontSize: "xx-large" }}
        onClick={() => {
          props.setCount(props.count - 1);
        }}
      >
        -
      </button>
    </>
  );
}
export default Button;
