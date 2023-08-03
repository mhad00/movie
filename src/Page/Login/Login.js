import React from "react";
import UserProfile from "../../Component/UserProfile/UserProfile";
import FooterProject from "../../Component/Footer/Footer";
import ScrollButton from "../../Component/Scroll/ScrollButton";
const Login = () => {
  return (
    <div>
      <div>Login</div>
      <div>
        <UserProfile />
        <hr />
        <FooterProject />
        <ScrollButton />
      </div>
    </div>
  );
};

export default Login;
