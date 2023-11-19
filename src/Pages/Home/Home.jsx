import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import myContext from "../../Context/data/myContext";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/productCard/ProductCard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  // console.log(cartItem);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };
  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Testimonial />
    </Layout>
  );
};

export default Home;
