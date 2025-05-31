import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isPaidUser = localStorage.getItem("userPaid") === "true";
  return isPaidUser ? children : <Navigate to="/#/" />;
}
