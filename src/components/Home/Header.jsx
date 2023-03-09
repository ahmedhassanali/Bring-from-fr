import "./Header.css";
import image from '../../assets/Header/image.svg'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const stores = useSelector(state => state.stores); 

  return (
    <>
      <div className="slider">
        <div className="row">
            <div className="col-md-6  header-content">
                <h1>Buy from the Best Online Stores in France and Ship to your doorstep in Egypt</h1>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Choose your product from Amazon or any website and paste it here"></input>
                    <button class="btn btn-primary add" type="button">Add</button>
                </div>
                <div className="items">
                     {stores.map((store) => (
                           <Link to={store.link}><img src={ store.image } alt="" /></Link>
                      ))} 
                </div>
            </div>
            <div className="col-md-5 header-image">
                <img src={ image } alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
