import { useEffect, useState } from "react";
import { login } from "../services/auth.service";

function LoginPage() {
  const [result, setResult] = useState("");
  useEffect(() => {
    async function handleLogin() {
      const result = await login({
        email: "kieutrunghieu104@gmail.com",
        password: "Hieu987hieu@",
      });
      setResult(result);
      console.log(result.data.email);
    };
    handleLogin();
  }, []);
  return (
    // <h1>{\\}</h1>
    <div className=""></div>
  );
}

export default LoginPage;