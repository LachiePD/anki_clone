import CreateUserForm from "@/components/CreateUserForm.jsx";

const Card = ({ header, form }) => {
  return (
    <div className={"card"}>
      <h1 className={"text-2xl "}>{header}</h1>
      {form}
    </div>
  );
};

export default Card;
