import React from "react";

const AuthorsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      Authors Layout is Special only for Authors Route or nested route inside
      the Authors directory
      {children}
    </div>
  );
};

export default AuthorsLayout;
