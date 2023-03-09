import "./HowtoBuy.css";

function HowToBuy() {
  return (
    <>
      <div className="how-buy" id="howToBuy">
        <div className="container">
          <h1>
            How to Enjoy Shopping and Buying from the best online stores in
            France and ship to Egypt easily at the Best Prices.
          </h1>

          <div className="row">
            <div className="col-md-8">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  title="iframe"
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-md-3 steps">
              <div className="step">
                <h5>1. Copy → Paste</h5>
                <p>
                  Copy the URL and paste it, add any missing details and click
                  “Order Now” Button
                </p>
              </div>
              <div className="step">
                <h5>2. Confirm your order</h5>
                <p>
                  After receiving your request, your order will be reviewed for
                  final quotation
                </p>
              </div>
              <div className="step">
                <h5>3. Pay</h5>
                <p>
                  Once reviewed, an email will be sent with payment breakdown.
                  You can pay using our various payment methods listed on the
                  website
                </p>
              </div>
              <div className="step">
                <h5>4. Receive</h5>
                <p>
                  After your product reaches our warehouse in USA, UK, China,
                  UAE or Turkey it will be shipped to our warehouse in Egypt
                  within 7 to 21 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToBuy;
