import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const admin = localStorage.getItem("admin");
  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
