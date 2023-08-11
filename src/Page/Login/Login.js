import { useRef } from "react";
import "./Login.css";
import Show from "./Show.js";
import { useEffect } from "react";
const Login = () => {
  const pswRef = useRef("");
  const rePswRef = useRef("");
  const textRef = useRef("");
  const emailRef = useRef("");
  useEffect(() => {
    textRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="userSignup">
      <form className="signUp" onSubmit={handleSubmit} id="form">
        <button
          className="close"
          onClick={() =>
            (document.getElementById("form").style.display = "none")
          }
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
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email@gmail.com"
              ref={emailRef}
              name="email"
            />
          </div>
          <div className="psw">
            <input
              type="password"
              placeholder="Password"
              id="mk"
              ref={pswRef}
              name="mk"
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
            />
            <button onClick={() => Show(rePswRef.current)}>show</button>
          </div>
          <label htmlFor="date">Date of birth </label>
          <div className="date">
            <input type="text" placeholder="YYYY" name="date" />
            <input type="text" placeholder="MM" name="date" />
            <input type="text" placeholder="DD" name="date" />
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
