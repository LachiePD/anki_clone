
const Card = ({ header, children }) => {
  return (
    <div className={"bg-primary shadow-xl border border-secondary rounded-2xl flex-1 max-w-4xl"}>
      <h1 className={"text-2xl "}>{header}</h1>
      {children}
    </div>
  );
};

export default Card;
