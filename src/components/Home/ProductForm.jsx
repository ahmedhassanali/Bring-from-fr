import product from "../../assets/ProductForm/product.png";
import './ProductForm.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../rtk/slices/CategoriesSlice";

function ProductForm(){

    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCategories());
    }, []);

    return(
        <>
        <div className='container my-5 product-form'>
            <form className="form row">
                    <div className="image col-md-3 col-sm-12">
                    <img class="" src={product} alt="" />
                    </div>
                    <div className="col-md-9 content">
                        <div className="row m-2">
                                <div class="col-md-12">
                                    <input type="text" class="form-control" placeholder="Choose your product from Amazon or any website and paste it here"></input>
                                </div>

                                <div className="col-md-6">
                                    <input placeholder="Product Name" type="text" className="form-control" />
                                </div>

                                <div className="col-md-6">
                                    <select class="form-select" aria-label="Default select example">
                                    {categories.map((category)=>(
                                        <option selected key={category.id} value={categories.id}>{category.name}</option>
                                    ))}
                                    </select>
                                </div>  

                                <div className="col-md-4">
                                    <input placeholder="Price" type="number" className="form-control" />
                                </div>

                                <div className="col-md-4">
                                    <input placeholder="Domestic shipping" type="text" className="form-control" />
                                </div>

                                <div className="col-md-4">
                                    <input placeholder="QTY" type="number" className="form-control" />
                                </div>

                                <div className="col-md-6">
                                    <input placeholder="Color" type="text" className="form-control" />
                                </div>

                                <div className="col-md-6">
                                    <input placeholder="Size" type="text" className="form-control" />
                                </div>
                                
                        </div>
                    </div>
                    <span><hr/></span>
                    <div className="content row">
                        <p className="col-md-5">If out of stock / Price changed</p>
                        <div className="col-md-4 checkbox">
                            <input type="checkbox" className="form-check-input" />
                            <label for="vehicle1" className="form-check-label">Purchase the rest of the order's products</label>
                        </div>                           
                        <div className="col-md-3 checkbox">
                            <input type="checkbox" className="form-check-input" />
                        <label for="vehicle1" className="form-check-label">Hold Order</label>                        </div>                       
                        
                        <div className="col-md-10 ">
                            <input placeholder="Note" type="text" className="form-control" />
                        </div>                            
                        <button type="button" className="btn btn-primary col-md-2 col-11 add"> Add </button>
                    </div>
                </form>
        </div>
        </>
    )

}

export default ProductForm;