"use client";
import { Card, LoginForm } from "@/components/index";

const Page = () => {
  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      <Card header={"LOGIN"}>
        <LoginForm />
      </Card>
    </main>
  );
};

export default Page;
