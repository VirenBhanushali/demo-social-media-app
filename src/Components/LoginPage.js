import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginThunk, userSignupThunk } from "../store/ReduxStore";
import loginClasses from "./LoginPage.module.css";

function LoginPage() {
  const [loginPage, setLoginPage] = useState(true);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={loginClasses.loginContainer}>
      <h1>Socio App</h1>
      {!loginPage && (
        <div className={loginClasses.formElement}>
          <label>First Name</label>
          <input
            onInput={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="First Name"
          ></input>
        </div>
      )}
      {!loginPage && (
        <div className={loginClasses.formElement}>
          <label>Last Name</label>
          <input
            onInput={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Last Name"
          ></input>
        </div>
      )}
      <div className={loginClasses.formElement}>
        <label>Email</label>
        <input
          onInput={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        ></input>
      </div>
      <div className={loginClasses.formElement}>
        <label>Password</label>
        <input
          onInput={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></input>
      </div>
      {!loginPage && (
        <div className={loginClasses.formElement}>
          <label> Confirm Password</label>
          <input
            onInput={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm Password"
          ></input>
        </div>
      )}
      {loginPage && (
        <div className={loginClasses.forgotPasswordLink}>
          <p>Fogot Password?</p>
        </div>
      )}

      {loginPage ? (
        <div className={loginClasses.forgotPasswordLink}>
          <p onClick={() => setLoginPage((old) => !old)}>
            New User? Sign-Up Here
          </p>
        </div>
      ) : (
        <div className={loginClasses.forgotPasswordLink}>
          <p onClick={() => setLoginPage((old) => !old)}>
            Already Have Account?
          </p>
        </div>
      )}

      <div className={loginClasses.formElement}>
        <button
          onClick={() => {
            if (loginPage) {
              dispatch(
                userLoginThunk({
                  email,
                  password,
                })
              );
            } else {
              dispatch(
                userSignupThunk({
                  email,
                  password,
                  firstName,
                  lastName,
                })
              );
            }
          }}
        >
          {loginPage ? "Login" : "SignUp"}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
