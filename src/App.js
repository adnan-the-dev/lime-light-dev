import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import ProductAdd from "./components/productAdd/ProductAdd";
import DetailsItem from "./components/details/DetailsItem";
import { v4 } from "uuid";
import { Carousal } from "./components/carousal/Carousal";
function App() {
  const home = [
    {
      name:'ali',
      img:'https://www.limelight.pk/cdn/shop/files/DSC07248_7cb87d39-e8cc-4a0b-a030-009d81a81d06_533x.jpg?v=1701863047',
      price:'23',
      id:v4()
    },
    {
      name:'ali',
      img:'https://www.limelight.pk/cdn/shop/files/DSC08122_533x.jpg?v=1701671641',
      price:'23',
      id:v4()
    },
    {
      name:'ali',
      img:'https://www.limelight.pk/cdn/shop/files/DSC08076_533x.jpg?v=1701067463',
      price:'23',
      id:v4()
    },
    {
      name:'ali',
      img:'https://www.limelight.pk/cdn/shop/files/DSC03913_1_533x.jpg?v=1700725699',
      price:'23',
      id:v4()
    },
    {
      name:'ali',
      img:'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
      price:'23',
      id:v4()
    }
  ]
  return (
    <>
      <Navbar />
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home home={home}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productadd" element={<ProductAdd />} />
          <Route path="/detailsitem/:id" element={<DetailsItem home={home}/>} />
        </Routes>
      {/* </BrowserRouter> */}
      <Carousal/>

    </>
  );
}

export default App;
