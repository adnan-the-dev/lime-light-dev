import React, { useEffect } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// import '../sharedCss/shared.css'
export const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const loginData = (data) => {
    const formData = {
      email: data.email,
      password: data.password
    }
    registerUser(formData)
  }
const baseUrl = process.env.REACT_APP_BASE_URL
  const registerUser = async (userData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/login`,
        userData
      );

      if (response.status == 200) {
        console.log(response,'response after login');
        toast.success(`${response?.data.username} login successfully`)
        localStorage.setItem('allUserData',JSON.stringify(response.data))  
        navigate('/')

      } else {
        toast.error(`${response?.data}some error ecourd`)
      }
    } catch (error) {
      console.error("An error occurred during registration:", error.message);
    }
  };
  useEffect(()=>{
    if(localStorage.getItem("allUserData")){
      navigate("/")
    }
  
    },[])
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <section>
                <div className="main-section">
                  <div className="login-box">
                    <form onSubmit={handleSubmit(loginData)}>
                      <h2>Login</h2>
                      <div className="input-box">
                        <span className="icon">
                          <ion-icon name="mail" />
                        </span>
                        <input type="email" id="email" placeholder="Enter your Email" name="email" {...register('email')} />

                      </div>
                      <div className="input-box">
                        <span className="icon">
                          <ion-icon name="lock-closed" onclick="show()" />
                        </span>
                        <input type="password" id="passwords" placeholder="Enter your Password" name="password" {...register('password')} />
                      </div>
                      <p id="error" />
                      <div className="remember-forgot">
                        <label>
                          <input type="checkbox" />
                          Remember
                        </label>
                        <a>Forgot Password?</a>
                      </div>
                      <button className="btn-login">Login</button>
                      <div className="register-link">
                        <p>
                          Don't have an account?<a>Rigister</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
