import { useContext } from "react";
import { AuthContext } from "../Auth Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const Private = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    // console.log(user)

    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

Private.propTypes  = {
    children: PropTypes.node
}

export default Private;