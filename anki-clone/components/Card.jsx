const styles = {
  card: `
	bg-primary shadow-xl rounded-2xl   flex flex-col
	border border-secondary 
	items-center
	justify-center
	`,
};

const Card = ({ header, children, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <h1 className={"text-2xl "}>{header}</h1>
      {children}
    </div>
  );
};

export default Card;
