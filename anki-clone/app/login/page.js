"use client";
import Card from "@/components/Card.jsx";
import LoginForm from "@/app/login/LoginForm.jsx";

const Page = () => {
  return (
    <div className={"flex p-5 mx-auto"}>
      <Card  header={"LOGIN"} >
	  <LoginForm/>
	  </Card>
    </div>
  );
};

export default Page;
