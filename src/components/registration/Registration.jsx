import React, { useEffect } from "react";
import "../sharedCss/shared.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate()
  let { register, handleSubmit, reset } = useForm();
  const getDataAllData = (data) => {
    const formData = {
      username: data.name,
      email: data.email,
      password: data.password
    }
    registerUser(formData)
    // reset()
  };
  const baseUrl = process.env.REACT_APP_BASE_URL
  const registerUser = async (userData) => {
    try {
      const response = await axios.post(
        `${baseUrl}/register`,
        userData
      );

      if (response.status === 200) {
        toast.success(`${response?.data?.username} registered successfully`)
        navigate('/login')
      } else {
        console.error("Registration failed:", response.data);
        toast.error(`${response?.data}some error occured`)
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
              <div className="container">
                <div className="first">
                  <div className="heading">
                    <h1>Registration</h1>
                  </div>
                  <form onSubmit={handleSubmit(getDataAllData)}>
                    <div className="input-block">
                      <input
                        type="name"
                        autoComplete="off"
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                        {...register("name")}
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="email"
                        autoComplete="off"
                        name="email"
                        placeholder="Enter your Email"
                        {...register("email")}
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        placeholder="Enter your Password"
                        {...register("password")}
                      />
                    </div>
                    <div className="btn-container">
                      <div className="btn-box">
                        <button className="btn">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
