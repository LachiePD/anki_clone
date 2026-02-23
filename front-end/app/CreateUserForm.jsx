"use client";
import Link from "next/link";
import { useState } from "react";
import { createUser } from "@/api/user/user.js";
import { useRouter } from "next/navigation";

const inputStyle =
  "border border-gray-400 border-1 rounded shadow-sm resize-none";

const CreateUserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    secondPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createUser({userName: formData.userName,password: formData.password});

    if (result.status !== 200) {
      console.log("Create user failed");
      return;
    }

    router.push("/login");
  };

  return (
    <form
      className={"flex flex-col gap-4 items-center"}
      onSubmit={ handleSubmit}
    >
      <input
        name={"userName"}
        className={inputStyle}
        placeholder={"Enter your username"}
        onChange={ handleChange}
      />
      <input
        name={"password"}
        className={inputStyle}
        placeholder={"Enter your password"}
        type={"password"}
        onChange={ handleChange}
      />
      <input
        name={"secondPassword"}
        className={inputStyle}
        placeholder={"Enter password again"}
        type={"password"}
        onChange={ handleChange}
      />
      <button className={"button"} type={"submit"}>
        Create User
      </button>
    </form>
  );
};

export default CreateUserForm;
