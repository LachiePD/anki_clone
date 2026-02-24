"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {CreateUserForm } from "@/features/forms/index.js";
import {Card } from "@/components/index";

const page = () => {
  const router = useRouter();

  return (
    <div className={"  flex flex-col  h-full mx-auto  justify-center"}>
      <Card header={"Create User!"}>
        <CreateUserForm />
        <button
	  className={'button'}
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </Card>
    </div>
  );
};

export default page;
