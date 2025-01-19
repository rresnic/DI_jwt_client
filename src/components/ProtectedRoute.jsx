import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/userAuth";
import { useEffect } from "react";

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {refreshAuth, isAuthenticated } = useAuth();
    console.log(isAuthenticated)
    useEffect(()=> {
        refreshAuth();
    }, [])
    if(!isAuthenticated) {
        console.log("not authenticated")
        return <Navigate to={"/login"} state={{from:location}} replace />
    }
    return children
}
export default ProtectedRoute;