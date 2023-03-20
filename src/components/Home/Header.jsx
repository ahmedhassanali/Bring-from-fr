import "./Header.css";
import image from '../../assets/Header/images.svg'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { fetchcategories } from "../../rtk/slices/CategoriesSlice";

function Header() {
  const stores = useSelector(state => state.stores); 



  return (
    <>
      <div className="slider">
        <div className="row">
            <div className="col-md-6 header-content">
                <h1>Buy from the Best Online Stores in France and Ship to your doorstep in Egypt</h1>
                <div className="items">
                     {stores.map((store) => (
                           <Link to={store.link}><img src={`http://127.0.0.1:8000/storage/images/${store.logo}`} alt="" /></Link>
                      ))} 
                </div>
            </div>
            <div className="col-md-5 header-image d-none d-md-block">
                <img src={ image } alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
