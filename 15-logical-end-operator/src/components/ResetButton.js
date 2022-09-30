function ResetButton({ count, onClick }) {
  return (
    count > 0 && (
      <div>
        <button style={{ backgroundColor: "lightgreen" }} onClick={onClick}>
          Reset
        </button>
      </div>
    )
  );
}

export default ResetButton;
