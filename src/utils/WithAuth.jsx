import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const WithAuth = (WrappedComponent ) => {
    const AuthComponent = (props) => {
        const router = useNavigate();

        const isAuthenticated = () => {
            if(localStorage.getItem("Token")) {
                return true;
            } 
            return false;
        }

        useEffect(() => {
            if(!isAuthenticated()) {
                router("/login")
            }
        }, [])

        return <WrappedComponent {...props} />
    }

    return AuthComponent;
}

export default WithAuth;