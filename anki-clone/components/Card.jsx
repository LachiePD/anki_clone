
const Card = ({ header, children }) => {
  return (
    <div className={"card w-fit"}>
      <h1 className={"text-2xl "}>{header}</h1>
      {children}
    </div>
  );
};

export default Card;
