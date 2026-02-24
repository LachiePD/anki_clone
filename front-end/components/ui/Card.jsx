const styles = {
  card: `flex flex-col
	bg-primary shadow-xl rounded-2xl
	border border-secondary 
	p-8
	`,
};

export const Card = ({ header, children, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <h1 className={"text-2xl "}>{header}</h1>
      {children}
    </div>
  );
};

