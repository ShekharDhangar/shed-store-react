import { useNavigate} from "react-router-dom";
import "../AuthenticationComp.css";
import { useState } from "react";
import {FaUserAlt,MdEmail, BsKeyFill,BsFillEyeSlashFill,
  BsFillEyeFill,} from '../../../../icons/icons';
import { Navbar } from "../../../../components/components";

function AuthSignUp(){
  const [passwordShown, setPasswordShown] = useState(false);
  function toggleShowPassword(){
    setPasswordShown(passwordShown=>!passwordShown)
  }
    const navigate = useNavigate()
    function signUpFormSubmitHandler(){

    }
    return (
        <>
        < Navbar isMenuRequired={false} />
        <section className="flex form-container">
        <form onSubmit={signUpFormSubmitHandler}
        action="sign-up form register"
        className="signup-form"
      >
        <h2 className="form-title txt-center h2 ">Create Account</h2>
        <div className="flex-container social-login">
          <a href="#">
            <img
              className="icon size-xs"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
            />
          </a>
          <a href="#">
            <img
              className="icon size-xs"
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            />
          </a>
          <a href="#">
            <img
              className="icon size-xs"
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            />
          </a>
        </div>
        <p className="or">
          <span>or</span>
        </p>
        <div className="name-input-box">
          <div className="input-with-icon ">
        < FaUserAlt className="icon size-xs" />
            <input
              type="text"
              placeholder="First Name"
              className="input firstname-input"
            />
          </div>
          <div className="input-with-icon">
        < FaUserAlt className="icon size-xs" />            
            <input
              type="text"
              placeholder="Last Name"
              className="input lastname-input"
            />
          </div>
        </div>
        <div className="input-with-icon">
            <MdEmail className="icon size-xs" />
          <input
            type="email"
            placeholder="Email"
            className="input email-input"
          />
        </div>
        <div className="flex input-with-icon password-box">
          < BsKeyFill className="icon size-xs  key-icon" />
          <input
            type="text"
            placeholder=" Password"
            className="input see-password-input"
          />
        </div>

        <div className="flex input-with-icon active-inp">
          < BsKeyFill className="icon size-xs key-icon" />
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Confirm Password"
            className="input password-input"
          />
          {passwordShown ? (
              <BsFillEyeSlashFill onClick={toggleShowPassword} className="icon eye-icon " />
            ) : (
              <BsFillEyeFill onClick={toggleShowPassword} className="icon eye-icon" />
            )}
        </div>
        <button  className="signup-btn btn btn-md link">
          Sign Up
        </button>
        <div className="login-way">
          <span className="account-yes">Already have an Account?</span>
          <p className="lt-bold try-btn" onClick={()=>navigate("/login")} >
            Sign In
          </p>
        </div>
      </form>
      </section>
      </>

    )
}

export {AuthSignUp}