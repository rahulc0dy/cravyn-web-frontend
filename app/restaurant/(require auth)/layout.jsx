import ProtectedRoute from "@components/restaurant/ProtectedRoute";

const ProtectedLayout = ({ children }) => {
  return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default ProtectedLayout;
