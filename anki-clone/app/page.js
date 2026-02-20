"use client";
import Link from "next/link";
import { useState } from "react";
import { createUser } from "@/api/user/user.js";
import { useRouter } from "next/navigation";
import CreateUserForm from "@/components/CreateUserForm.jsx";
import Card from "@/components/Card.jsx";

const page = () => {
  //TODO make a hook for this
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const result = await createUser({ userName, password });

    if (result.status !== 200) {
      setError(result.message);
      return;
    }

    router.push("/login");
  };

  const handleChange = (e, whichState) => {
    if (whichState == "userName") {
      setUserName(e.target.value);
    }
    if (whichState == "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className={"  flex flex-col  h-full mx-auto "}>
      <Card header={"Create User!"} form={<CreateUserForm />} />
      <button
        className={"bg-amber-100  w-min self-end m-5 p-5 rounded-full"}
        onClick={() => router.push("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default page;
