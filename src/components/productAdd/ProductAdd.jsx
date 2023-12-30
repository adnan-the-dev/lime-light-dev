import React from "react";
import { useForm } from "react-hook-form";
import "../sharedCss/shared.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProductAdd = () => {
  let { register, handleSubmit} = useForm();
  const navigate = useNavigate()
  const baseUrl = process.env.REACT_APP_BASE_URL

  const getDataAllData = (data) => {
    if (!data.file.length) {
      toast.error("No image selected");
      return
    }
    data.img = URL.createObjectURL(data.file[0]);
    const formData = {
      name: data.name,
      price: data.price,
      category:'',
      description: data.description,
      discount:'',
      images: data.img
    }
    addProducts(formData)
    //   data.id = v4();
    //   dispatch({
    //     type:'ADD_DATA',
    //     payload:data
    //   })
    //  toast.success("Product create")
    // //  reset()
    // navigate('/')
  };

  const addProducts = async (productData) => {
    try {
      const res = await axios.post(`${baseUrl}/addProduct`, productData);
      if (res.status === 200) {
        toast.success("add product successfully")
        navigate('/')
      } else {
        toast.error("some error occured")
      }
    } catch (e) {
      toast.error(`${e.message}An error occurred during addProduct`)
    }
  }
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
                        placeholder="Enter your product name"
                        {...register("name")}
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="number"
                        autoComplete="off"
                        name="price"
                        placeholder="Enter your product Price"
                        {...register("price")}
                      />
                    </div>
                    <div className="input-block">
                      <input
                        type="name"
                        autoComplete="off"
                        name="description"
                        placeholder="Enter your product description"
                        {...register("description")}
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
