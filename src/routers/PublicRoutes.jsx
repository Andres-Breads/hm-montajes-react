import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PublicRoutes = ({children}) => {
    const { token } = useAuth();
    return (!token)
        ? children
        : <Navigate to="/"/>
}