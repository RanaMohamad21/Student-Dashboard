import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
// import {login, logout} from "../features/auth/authenticationSlice";
import { Navigate } from 'react-router-dom';

const requireAuth = (Component)=>{
    
 

    return (props)=>{
        const isLoggedIn = useSelector((state:RootState)=> state.authentication.value);

        if(!isLoggedIn){
            // Redirect to home page if not logged in
            return <Navigate to="/"/>;
        }

        return <Component {...props}/>
    }
}

export default requireAuth;