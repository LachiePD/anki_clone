const Inspect = ({ modeActions }) => {
  return (
    <div>
      this is the inspect component
      <button
        className={"border border-green-600 m-5"}
        onClick={modeActions.startEditing}
      >
        Edit
      </button>
      <button
        className={"border border-green-600 m-5"}
        onClick={modeActions.startPractice}
      >
        Practice
      </button>
    </div>
  );
};

export default Inspect;
