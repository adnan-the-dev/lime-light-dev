import React, { useEffect, useState } from "react";
import "../sharedCss/shared.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { json } from "react-router-dom";
import axios from "axios";
export const Registration = () => {
  const [data, setData] = useState([]);
  console.log(data,'data');
  let { register, handleSubmit } = useForm();
  const getDataAllData = (data) => {
    console.log(data);
    toast.success("User registred");
  };

    async function registerApi(){
      const res = await fetch('http://localhost:8800/api/auth/register')
      .then(res=>res.json()).then(json=>json)

      setData(res)
    }

    useEffect(()=>{
      registerApi
    },[])

//   useEffect(() => {
//     axios
//       .get("http://localhost:8800/api/auth/register")
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

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
                  {/* <button onClick={registerApi}>hello</button> */}
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
