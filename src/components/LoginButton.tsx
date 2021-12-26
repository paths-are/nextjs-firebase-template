import * as React from "react";
import { Button } from "@mui/material";
import { login } from "@/src/hooks/auth";

const LoginButton = () => {
  const handleLogin = (): void => {
    login().catch((error) => console.error(error));
  };
  return <Button onClick={handleLogin}>ログイン</Button>;
};
export default LoginButton;
