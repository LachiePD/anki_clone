"use client";
import {Card}  from "@/components/index";
import {LoginForm } from "@/features/forms/index.js";

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
