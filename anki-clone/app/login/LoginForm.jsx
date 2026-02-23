
import { attemptLogin } from "@/api/auth/auth.js";
import { useState } from "react";
import { useRouter } from "next/navigation";


const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleChange = (e, credential) => {
    switch (credential) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await attemptLogin({ userName, password });

    if (result.status !== 200) {
	    throw new Error
      return;
    }
    router.push("/homescreen");
  };

  return (
    <form className={" flex mx-auto gap-4 flex-col "} onSubmit={(e) => handleSubmit(e)}>
      <label>Username: </label>
      <input
        type="text"
        className={"border-2"}
        onChange={(e) => {
          handleChange(e, "userName");
        }}
      />
      <br />

      <label>Password: </label>
      <input
        type="password"
        className={"border-2"}
        onChange={(e) => {
          handleChange(e, "password");
        }}
      />
      <br />
      <button
        type={"submit"}
	  className={'button'}
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
