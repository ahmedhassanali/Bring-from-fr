import product from "../../assets/ProductForm/product.png";
import './ProductForm.css'
function ProductForm(){

    return(
        <>
        <div className='container my-5 product-form'>
            <form className="form row">
                    <img class="col-md-3" src={product} alt="" />
                    <div className="col-md-9 content">
                        <div className="row m-2">
                                <div className="col-6">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>  

                                <div className="col-md-12">
                                    <input placeholder="Product Name" type="text" className="form-control" />
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
                        <div className="col-md-4">
                            <input placeholder="Category" type="checkbox" className="form-check-input" />
                            <label for="vehicle1" className="form-check-label">Purchase the rest of the order's products</label>
                        </div>                           
                        <div className="col-md-3">
                        <input placeholder="Category" type="checkbox" className="form-check-input" />
                            <label for="vehicle1" className="form-check-label">Hold Order</label>                        </div>                       
                        
                        <div className="col-md-10">
                            <input placeholder="Note" type="text" className="form-control" />
                        </div>                            
                        <button type="button" className="btn btn-primary col-md-2 add"> Add </button>
                    </div>
                </form>
        </div>
        </>
    )

}

export default ProductForm;