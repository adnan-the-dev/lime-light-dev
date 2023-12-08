import React from "react";
import { useForm } from "react-hook-form";
import "../sharedCss/shared.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
const ProductAdd = () => {
  let { register, handleSubmit } = useForm();

  const dispatch = useDispatch()
  const getDataAllData = (data) => {
    if(!data.file.length){
      toast.error("No image selected");
      return
    }
    data.img = URL.createObjectURL(data.file[0]);
    dispatch({
      type:'ADD_DATA',
      payload:data
    })
    console.log(data);
   toast.success("Product create")
  };
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="container">
                <div className="first">
                  <div className="heading">
                    <h1>Create Product</h1>
                  </div>
                  <form onSubmit={handleSubmit(getDataAllData)}>
                    <div className="input-block">
                      <input
                        type="name"
                        autoComplete="off"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        {...register("name")}
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="number"
                        autoComplete="off"
                        name="price"
                        placeholder="Enter your Price"
                        {...register("price")}
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="file"
                        autoComplete="off"
                        name="file"
                        {...register("file")}
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

export default ProductAdd;
