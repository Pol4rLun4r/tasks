import { Outlet, Navigate, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

type allowType = ('USER' | 'ADMIN')[];

interface IProtect {
    allowedRole?: allowType;
}

const PrivateRoute = ({ allowedRole = ["ADMIN", "USER"] }: IProtect) => {
    const { auth }: any = useAuth();

    const location = useLocation();

    if (allowedRole.includes(auth?.role)) return <Outlet />

    if (auth?.username) return <Navigate to="/unauthorized" state={{ from: location }} replace />

    return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute