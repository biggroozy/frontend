"use client";
import React, { FormEvent } from "react";
import "./styles/FormLogin.css";

const FormLogin = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log(formData);

    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   body: formData,
    // });

    // const data = await response.json();
    // ...
  }
  return (
    <div className="form-login">
      <p className="form-login-title fs-3">
        Panel strony <span className="form-login-title-name">Moysa</span>
      </p>
      <form className="form-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" name="login" />
          <label className="fs-5">Login</label>
        </div>
        <div className="form-control">
          <input type="text" name="login" />
          <label className="fs-5">Password</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormLogin;
