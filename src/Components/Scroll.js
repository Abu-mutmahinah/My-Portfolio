const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid black",
        height: "90vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
