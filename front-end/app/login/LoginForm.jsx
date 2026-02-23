import { attemptLogin } from "@/api/auth/auth.js";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await attemptLogin({userName:formData.userName, password:formData.password});

    if (result.status !== 200) {
      throw new Error();
      return;
    }
    router.push("/homescreen");
  };

  return (
    <form
      className={" flex mx-auto gap-4 flex-col "}
      onSubmit={handleSubmit}
    >
      <label>Username: </label>
      <input
        name="userName"
        type="text"
        className={"border-2"}
        onChange={handleChange}
      />

      <label>Password: </label>
      <input
        name="password"
        type="password"
        className={"border-2"}
        onChange={handleChange}
      />

      <button type={"submit"} className={"button"}>
        Login
      </button>
    </form>
  );
};
export default LoginForm;
