import React, { useState } from "react";
import { useStore } from "../store/store";

type Props = {};

const Login = () => {
  const { login } = useStore();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login(name, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-full max-w-xs mb-2">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs mb-6">
        <label className="label">
          <span className="label-text">What is your password?</span>
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*****"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs mb-6">
        <input type="submit" className="btn btn-primary" value="Login" />
      </div>
    </form>
  );
};

const SignUp = () => {
  const { signup } = useStore();
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signup(name, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-full max-w-xs mb-2">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs mb-6">
        <label className="label">
          <span className="label-text">Choose a password?</span>
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*****"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs mb-6">
        <input type="submit" className="btn btn-primary" value="Signup" />
      </div>
    </form>
  );
};

export default function Auth({}: Props) {
  const [authPage, setAuthPage] = useState("login");

  const handleClick = () => {
    if (authPage === "login") {
      return setAuthPage("signup");
    }
    setAuthPage("login");
  };

  return (
    <div>
      <div className="tabs tabs-boxed">
        <button
          className={`tab ${authPage === "login" ? "tab-active" : ""}`}
          onClick={handleClick}
        >
          Login
        </button>
        <button
          className={`tab ${authPage === "signup" ? "tab-active" : ""}`}
          onClick={handleClick}
        >
          Signup
        </button>
      </div>
      {authPage === "login" ? <Login /> : <SignUp />}
    </div>
  );
}
