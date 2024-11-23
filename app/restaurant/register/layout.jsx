import { UserAuthProvider } from "@providers/UserAuthProvider";

const RegisterPageLayout = ({ children }) => {
  return <UserAuthProvider>{children}</UserAuthProvider>;
};

export default RegisterPageLayout;
