import { useRef, useState } from "react";
import "./Login.css";
import Show from "./Show.js";
import { useEffect } from "react";
import { Navigate } from "react";
import { useNavigate } from "react-router-dom";

const Login = (setUserMovie) => {
  const [data, setData] = useState({});
  const pswRef = useRef("");
  const rePswRef = useRef("");
  const textRef = useRef("");
  const emailRef = useRef("");
  const navigate = useNavigate();
  useEffect(() => {
    textRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    navigate("/");
    return setUserMovie(true);
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
    localStorage.setItem("user", JSON.stringify(data));
  };
  return (
    <div className="userSignup">
      <form className="signUp" onSubmit={handleSubmit} id="form">
        <button
          className="close"
          onClick={() => {
            document.getElementById("form").style.display = "none";
            navigate("/");
          }}
        >
          X
        </button>
        <div className="logo">
          <h2>
            <strong>Movie Master</strong>
          </h2>
        </div>
        <div className="register">
          <h3>
            <strong>Sign up with Email</strong>
          </h3>
          <div>
            <input
              type="text"
              placeholder="User Name"
              ref={textRef}
              name="text"
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email@gmail.com"
              ref={emailRef}
              name="email"
              onChange={onChangeHandler}
            />
          </div>
          <div className="psw">
            <input
              type="password"
              placeholder="Password"
              id="mk"
              ref={pswRef}
              name="mk"
              onChange={onChangeHandler}
            />
            <button onClick={() => Show(pswRef.current)}>show</button>
          </div>
          <div className="rePsw">
            <input
              type="password"
              placeholder="Confirm Password"
              id="remk"
              ref={rePswRef}
              name="remk"
              onChange={onChangeHandler}
            />
            <button onClick={() => Show(rePswRef.current)}>show</button>
          </div>
          <label htmlFor="date">Date of birth </label>
          <div className="date">
            <input
              type="text"
              placeholder="YYYY"
              name="year"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              placeholder="MM"
              name="month"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              placeholder="DD"
              name="day"
              onChange={onChangeHandler}
            />
          </div>
          <button className="b-signUp" type="submit">
            Sign Up
          </button>
          <button className="convertLogin">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
