import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

     
          <div className="footer-col">
            <h3 className="footer-title">Exclusive</h3>
            <p className="footer-text">Subscribe</p>
            <span className="footer-small">
              Get 10% off your first order
            </span>

            <div className="footer-input">
              <input type="email" placeholder="Enter your email" />
              <button>➤</button>
            </div>
          </div>


          <div className="footer-col">
            <h3 className="footer-title">Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Account</h3>
            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>


          <div className="footer-col">
            <h3 className="footer-title">Quick Link</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

    
          <div className="footer-col">
            <h3 className="footer-title">Download App</h3>
            <p className="footer-small">
              Save $3 with App New User Only
            </p>

            <div className="footer-apps">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_app_on_Google_Play.svg"
                alt="Google Play"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
            </div>

            <div className="footer-socials">
              <span>f</span>
              <span>t</span>
              <span>in</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
