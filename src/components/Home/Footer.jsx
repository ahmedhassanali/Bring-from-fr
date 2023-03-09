import React from "react";
import logo from "../../assets/NavBar/logo2.png";

import "./Footer.css";
export default function Footer() {
  return (
    <>
      <section class="footer row">
        <img class="col-md-3" src={logo} alt="" />
        <div class="content col-md-8 row">
          <div class="col-md-4">
            <h3>About</h3>
            <p>
              Gebhaly.com is an Egyptian company established in 2016, providing
              an easy-to-use online platform that can simplify customers online
              shopping experience from the biggest online stores in USA, UK,
              UAE, China, Turkey and get their purchases fast, directly to their
              doors in Egypt, covering shipping, customs, clearance, and taxes
            </p>
          </div>

          <div class="col-md-4">
            <h3>Help</h3>
            <p>How to order</p>
            <p>FAQ</p>
            <p>Terms and conditions</p>
            <p>Blog</p>
            <p>Support</p>
            <p>Privacy and policy</p>
          </div>

          <div class="col-md-4">
            <h5 class="my-2">Contact us</h5>
            <p>How to order</p>
            <p>FAQ</p>
            <p>Terms and conditions</p>
            <p>Blog</p>
            <p>Support</p>
            <p>Privacy and policy</p>
          </div>

        </div>
      </section>
    </>
  );
}
