"use server";

type LoginSate = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export const loginAction = async (prevState: LoginSate, formData: FormData) => {
  console.log(formData);
  console.log(prevState,"prevState");

  const email = formData.get("email");
  const password = formData.get("password");

  const payload = { email, password };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  console.log(result);
  return result;
};
