import "./Packages.css";
import checked from "../../assets/Packages/check.png";
import React from 'react'

function Packages() {
  return (
    <>
      <div className="packages" id="packages">
        <div>
          <h1 className="container">
            Subscribe to Gebhaly’s business packages and get discounts on all
            your orders.
          </h1>
          <div>
            <div className="justify-content-center d-flex row">
              <div className="card col-md-2 col-sm-12">
                <div className="header">
                  <h3>Shein</h3>
                  <h4>50 <span>EGY/Month</span></h4>
                  <p>Applicable Categories</p>
                </div>
                <div className="card-body">
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>ZERO Customs & VAT</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>ZERO Fees</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Min. Item weight: 100gm</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Limited to 100K EGP</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Only 50 EGP/Month</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>106 EGP Per 100gm</h6>
                  </div>
                </div>
                <button className="Subscribe">Subscribe</button>
              </div>
              <div className="card col-md-2 col-sm-12">
                <div className="header">
                  <h3>Festival</h3>
                  <h4>49 <span>EGY/Month</span></h4>
                  <p>Applicable Categories</p>
                </div>
                <div className="card-body">
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>ZERO Customs & VAT</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>ZERO Fees</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Min. Item weight: 100gm</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Limited to 100K EGP</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Only 50 EGP/Month</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>106 EGP Per 100gm</h6>
                  </div>
                </div>
                <button className="Subscribe">Subscribe</button>
              </div>
              <div className="card col-md-2 col-sm-12">
                <div className="header">
                  <h3>Mini</h3>
                  <h4>99 <span>EGY/Month</span></h4>
                  <p>Applicable Categories</p>
                </div>
                <div className="card-body">
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>ZERO Customs & VAT</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>ZERO Fees</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Min. Item weight: 100gm</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Limited to 100K EGP</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Only 50 EGP/Month</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>106 EGP Per 100gm</h6>
                  </div>
                </div>
                <button className="Subscribe">Subscribe</button>
              </div>
              <div className="card col-md-2 col-sm-12">
                <div className="header">
                  <h3>Flat Rate</h3>
                  <h4>149 <span>EGY/Month</span></h4>
                  <p>Applicable Categories</p>
                </div>
                <div className="card-body">
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>ZERO Customs & VAT</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>ZERO Fees</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Min. Item weight: 100gm</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Limited to 100K EGP</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>Only 50 EGP/Month</h6>
                  </div>
                  <div className="feature">
                    <img src={checked} alt=""></img>
                    <h6>106 EGP Per 100gm</h6>
                  </div>
                </div>
                <button className="Subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;
