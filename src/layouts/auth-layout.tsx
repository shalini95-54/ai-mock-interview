
import { Outlet } from "react-router-dom";
const AuthenticationLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    {/*handler to store the user data */}
    <img src="/assests/img/bg.png" className="absolute w-full h-full object-cover opacity-20" alt=""/>
    
    <Outlet />    
    </div>
  );
};

export default AuthenticationLayout;
