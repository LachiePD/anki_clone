"use client";
import Card from "@/components/Card.jsx";
import LoginForm from "@/app/login/LoginForm.jsx";

const Page = () => {
  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      <Card header={"LOGIN"} >
        <LoginForm />
      </Card>
    </main>
  );
};

export default Page;
