const Inspect = ({ modeActions }) => {
  return (
    <div>
      this is the inspect component
      <button
        className={"button"}
        onClick={modeActions.startEditing}
      >
        Edit
      </button>
      <button
        className={"button"}
        onClick={modeActions.startPractice}
      >
        Practice
      </button>
    </div>
  );
};

export default Inspect;
