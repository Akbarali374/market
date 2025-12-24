import "../styles/Home.css";
import ProductCard from "../components/ProductCard";
import HeroSlider from "../components/heroSlider/HeroSlider";
import bg from "../../imgs/Frame 600.png";
import { FaCarSide } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { MdOutlineTextIncrease } from "react-icons/md";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <ul>
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>

          <HeroSlider />
        </div>
      </section>

      <div className="todays">
        <div className="today">
          <button className="today-btn"> Today’s</button>
        </div>
      </div>
      <section className="products">
        <h1>Flash Sales</h1>

        <div className="product-grid">
          <ProductCard title="Keyboard" price="$120" />
          <ProductCard title="Gamepad" price="$90" />
          <ProductCard title="Monitor" price="$300" />
          <ProductCard title="Monitor" price="$300" />
        </div>
      </section>
      <div className="teeam">
        <div className="container">
          <h1>View All Products</h1>
        </div>
      </div>
      <hr />
      <div className="todays">
        <div className="today">
          <button className="today-btn"> Categories</button>
        </div>
      </div>
      <h1>Browse By Category</h1>
      <div className="Categories">
        <div className="container">
          <div className="rows">
            <div className="row">
              <img src="./imgs/Category-CellPhone.png" alt="" />
              <h3>Phones</h3>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="todays">
        <div className="today">
          <button className="today-btn"> This Month</button>
        </div>
      </div>
      <h1>Best Selling Products</h1>
      <div className="product-grid">
        <ProductCard title="Keyboard" price="$120" />
        <ProductCard title="Gamepad" price="$90" />
        <ProductCard title="Monitor" price="$300" />
        <ProductCard title="Monitor" price="$300" />
      </div>
      <div
        className="background_picture"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container"></div>
      </div>
      <div className="todays">
        <div className="today">
          <button className="today-btn"> Our Products</button>
        </div>
      </div>
      <h1>Explore Our Products</h1>
      <div className="product-grid">
        <ProductCard title="Keyboard" price="$120" />
        <ProductCard title="Gamepad" price="$90" />
        <ProductCard title="Monitor" price="$300" />
        <ProductCard title="Monitor" price="$300" />
      </div>
      <div className="product-grid">
        <ProductCard title="Keyboard" price="$120" />
        <ProductCard title="Gamepad" price="$90" />
        <ProductCard title="Monitor" price="$300" />
        <ProductCard title="Monitor" price="$300" />
      </div>
      <div className="teeam">
        <div className="container">
          <h1>View All Products</h1>
        </div>
      </div>
      <div className="todays">
        <div className="today">
          <button className="today-btn"> Featured</button>
        </div>
      </div>
      <h1>New Arrival</h1>
      <img className="womanspicture" src="./imgs/Frame 739.png" alt="" />

      <div className="about-features">
        <div className="feature">
          <FaCarSide className="abouticon" />
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className="feature">
          <SiApplemusic className="abouticon" />
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="feature">
          <MdOutlineTextIncrease className="abouticon" />

          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
