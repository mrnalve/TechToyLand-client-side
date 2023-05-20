import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  if (loading) {
    return (
        <div className="h-[550px] relative">
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }else{
    Swal.fire({
      title: 'You have to log in first to view details!',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sure!'
    }).then((result) => {
      if (result.isConfirmed) {
        return  navigate('/login', { state: { from: location } });
      }else{
        return navigate('/');
      }
    })
  }
};

export default PrivateRoute;
