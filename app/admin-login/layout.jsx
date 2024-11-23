"use client";

import { UserAuthProvider } from "@providers/UserAuthProvider";

const LoginLayout = ({ children }) => {
  return <UserAuthProvider>{children}</UserAuthProvider>;
};

export default LoginLayout;
