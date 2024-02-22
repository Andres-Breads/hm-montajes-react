import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MdLogout } from "react-icons/md";

export const LogoutButton = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken();
        navigate("/", { replace: true });
    };

    return (
        <div className="LinkContainer">
            <a href="" className="Links" onClick={handleLogout}>
                <div className="Linkicon"><MdLogout/></div>
                <span>Cerrar sesión</span>
            </a>
        </div>
    );
}