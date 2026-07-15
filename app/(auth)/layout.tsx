import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Auth Layout is Special only for Auth Route or nested route inside the
      Auth directory
      {children}
    </div>
  );
};

export default AuthLayout;
