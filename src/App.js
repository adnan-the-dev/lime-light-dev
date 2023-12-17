import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Services from "./components/services/Services";
import ProductAdd from "./components/productAdd/ProductAdd";
import DetailsItem from "./components/details/DetailsItem";
import { Provider } from "react-redux";
import { total } from "./store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TotalOrders } from "./components/totalorders/TotalOrders";
import { Login } from "./components/login/Login";
import { Registration } from "./components/registration/Registration";
import UserDetails from "./components/userDetails/UserDetails";
function App() {


  // function Main() {
  //   return (
  //     <Routes>
  //       <Route path="/">
  //       <Route path="/" element={<Home /> } />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/services" element={<Services />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/productadd" element={<ProductAdd />} />
  //       <Route path="/detailsitem/:id" element={<DetailsItem />} />
  //       <Route path="/total-orders" element={<TotalOrders />} />
  //       </Route>

  //     </Routes>
  //   )
  // }
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Provider store={total}>
        {/* <Routes>
          <Route path="/*" element={userData ? <Main /> : <Navigate replace to='/login' />}>
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>
        </Routes> */}
        <Routes>
          <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/productadd" element={<ProductAdd />} />
        <Route path="/detailsitem/:id" element={<DetailsItem />} />
        <Route path="/total-orders" element={<TotalOrders />} />
        <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
        </Routes>
      </Provider>

    </>
  );
}

export default App;
