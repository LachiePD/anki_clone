"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CreateUserForm } from "@/components/index.mjs";
import { Card } from "@/components/index";

const page = () => {
  const router = useRouter();

  return (
    <Card className={"mx-auto gap-5"} header={"Create User!"}>
      <CreateUserForm />
      <button className={"button"} onClick={() => router.push("/login")}>
        Login
      </button>
    </Card>
  );
};

export default page;
