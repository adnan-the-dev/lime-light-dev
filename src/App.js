import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import SpecialPrice from "./components/SpecialPrice/SpecialPrice";
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
import { NewOnSale } from './components/NewOnSale/NewOnSale';
import { BestSeller } from './components/BestSeller/BestSeller';

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <ToastContainer />
      <Provider store={total}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/NewOnSale' element={<NewOnSale/>}/>
          <Route path="/SpecialPrice" element={<SpecialPrice />} />
          <Route path="/BestSeller" element={<BestSeller />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/productadd" element={<ProductAdd />} />
          <Route path="/detailsitem/:id" element={<DetailsItem />} />
          <Route path="/total-orders" element={<TotalOrders />} />
          <Route path="login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
