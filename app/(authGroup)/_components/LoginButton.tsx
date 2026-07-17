"use client";

import { Button } from "@/components/ui/button";

const LoginButton = () => {
  console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL,"LoginButton");
  return <Button>Login</Button>;
};

export default LoginButton;
