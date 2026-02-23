"use client";
import Link from "next/link";
import { useState } from "react";
import { createUser } from "@/api/user/user.js";
import { useRouter } from "next/navigation";

const inputStyle =
  "border border-gray-400 border-1 rounded shadow-sm resize-none";

const CreateUserForm = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e, stateName) => {
    switch (stateName) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "secondPassword":
        setSecondPassword(e.target.value);
        break;
      default:
        console.log("error in form switch statement");
        break;
    }
  };
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

  return (
    <div>
      <form
        className={"flex flex-col gap-4 items-center"}
        onSubmit={(e)=>handleSubmit(e)}
      >
        <input
          className={inputStyle}
          placeholder={"Enter your username"}
          onChange={(e) => handleChange(e, "userName")}
        />
        <input
          className={inputStyle}
          placeholder={"Enter your password"}
          type={"password"}
          onChange={(e) => handleChange(e, "password")}
        />
        <input
          className={inputStyle}
          placeholder={"Enter password again"}
          type={"password"}
          onChange={(e) => handleChange(e, "secondPassword")}
        />
        <button
	  className={"button"}
          type={"submit"}
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserForm;
