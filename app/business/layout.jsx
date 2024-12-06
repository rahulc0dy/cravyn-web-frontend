import ProtectedUserRoute from "@components/ProtectedUserRoutes";
import { UserAuthProvider } from "@providers/UserAuthProvider";

const BusinessLayout = ({ children }) => {
  return (
    <UserAuthProvider>
      <ProtectedUserRoute userType="business-team">
        {children}
      </ProtectedUserRoute>
    </UserAuthProvider>
  );
};

export default BusinessLayout;
