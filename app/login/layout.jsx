import { UserAuthProvider } from "@providers/UserAuthProvider";
import React from "react";

const LoginLayoutWrapper = ({ children }) => {
  return <UserAuthProvider>{children}</UserAuthProvider>;
};

export default LoginLayoutWrapper;
