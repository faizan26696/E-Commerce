import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import NoPage from "./Pages/NoPage/NoPage";
import MyState from "./Context/data/myState";
import Login from "./Pages/registration/Login";
import Signup from "./Pages/registration/Signup";
import ProductInfo from "./Pages/productInfo/ProductInfo";
import AddProduct from "./Pages/Admin/Page/AddProduct";
import UpdateProduct from "./Pages/Admin/Page/UpdateProduct";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allproducts from "./Pages/Allproducts/Allproduct";

const App = () => {
  return (
    <MyState>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route
            path="/order"
            element={
              <UserProtectedRoute>
                <Order />
              </UserProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <AdminProtectedRoute>
                <Dashboard />
              </AdminProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/addproduct"
            element={
              <AdminProtectedRoute>
                <AddProduct />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <AdminProtectedRoute>
                <UpdateProduct />
              </AdminProtectedRoute>
            }
          />
          <Route path="/productinfo/:id" element={<ProductInfo />} />

          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;

// Protected ROute For User-

export const UserProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export const AdminProtectedRoute = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "faizan26696@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
