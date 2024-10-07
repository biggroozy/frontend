import React from "react";
import FormLogin from "../components/FormLogin";
import "./styles/page.css";

const LoginPage = () => {
  return (
    <div className="section-login">
      <div className="login-box">
        <div className="login-box--left">
          <p>Hi</p>
        </div>
        <div className="login-box--right">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
