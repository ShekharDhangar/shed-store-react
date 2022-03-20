import "../AuthenticationComp.css";
import {
  FaUserAlt,
  BsKeyFill,
  BsFillEyeSlashFill,
  BsFillEyeFill,
} from "../../../../icons/icons";
import "./AuthLogin.css";
import { useNavigate } from "react-router-dom";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { useState } from "react";
import { Navbar } from "../../../../components/components";
function AuthLogin() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  function toggleShowPassword(){
    setPasswordShown(passwordShown=>!passwordShown)
  }
  const navigate = useNavigate();
  function loginFormSubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <>
      <Navbar isMenuRequired={false} />
      <div className="flex form-container">
        <form onSubmit={loginFormSubmitHandler} className="login-form">
          <h2 className="form-title txt-center h2">Sign in</h2>
          <div className="input-with-icon">
            <FaUserAlt className="icon size-xs" />
            <input
              type="text"
              placeholder="Email"
              className="input email-input"
            />
          </div>
          {/* <div className="flex validation-style">
          <img className="icon size-xs" src="/assets/warning.png" alt="" />
          <span className="msg-txt error-txt lt-bold">
            Please enter correct email
          </span>
        </div> */}
          <div className="flex input-with-icon">
            <BsKeyFill className="icon key-icon size-xs" />
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              className="input password-input"
            />
            {passwordShown ? (
              <BsFillEyeSlashFill onClick={toggleShowPassword} className="icon eye-icon " />
            ) : (
              <BsFillEyeFill onClick={toggleShowPassword} className="icon eye-icon" />
            )}
          </div>
          {/* <div className="flex validation-style">
          <img className="icon size-xs" src="/assets/warning.png" alt="" />
          <span className="error-txt lt-bold">
            Please enter correct Password
          </span>
        </div> */}

          <div className="flex remember-forgot-grp">
            <div className="flex remember-box">
              <input
                type="checkbox"
                id="yes"
                name="bydefault"
                value="yes"
                className="form-checkbox pointer"
              />
              <label htmlFor="yes" className="lt-bold txt-xs">
                Remember me
              </label>
            </div>
            <div
              onClick={() => setShowForgotPassword(true)}
              className="login-forgot pointer txt-sm"
            >
              Forgot password?
            </div>
            {showForgotPassword && (
              <ForgotPassword setShowForgotPassword={setShowForgotPassword} />
            )}
          </div>

          <button type="submit" className="btn btn-md link login-btn">
            Sign in
          </button>

          <div className="signup-way">
            <span className="account-no">Don't have an Account?</span>
            <p className="lt-bold try-btn" onClick={() => navigate("/signup")}>
              Create one
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export { AuthLogin };
