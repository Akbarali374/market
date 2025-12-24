import "../styles/About.css";
import { FaCarSide } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { MdOutlineTextIncrease } from "react-icons/md";

const About = () => {
  return (
    <section className="about">
      <div className="about-story">
        <div className="about-text">
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh.
          </p>
          <p>
            Supported by wide range of tailored marketing, data and service
            solutions, Exclusive has 10,500 sellers and 300 brands.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/20150812074510-Online-shopping.jpeg"
            alt="About story"
          />
        </div>
      </div>

      <div className="about-stats">
        <div className="about-box">
          <h3>10.5k</h3>
          <p>Sellers active on site</p>
        </div>

        <div className="about-box">
          <h3>33k</h3>
          <p>Monthly product sale</p>
        </div>

        <div className="about-box">
          <h3>45.5k</h3>
          <p>Customer active on site</p>
        </div>

        <div className="about-box">
          <h3>25k</h3>
          <p>Annual gross sale</p>
        </div>
      </div>

      <div className="about-team">
        <div className="team-card">
          <img
            src="https://www.spot.uz/media/img/2023/11/GDSkZ617010911080019_l.jpg"
            alt="Team member"
          />
          <h4>Tom Cruise</h4>
          <span>Founder & Chairman</span>
        </div>

        <div className="team-card">
          <img src="https://biznesombudsman.uz/media/django-summernote/2023-06-16/11525e01-14eb-470a-962c-2d07b2644561.jpg" />
          <h4>Emma Watson</h4>
          <span>Managing Director</span>
        </div>

        <div className="team-card">
          <img
            src="https://plus.unsplash.com/premium_photo-1661369552719-ce7d09f70264?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBnaXJsfGVufDB8fDB8fHww"
            alt="Team member"
          />
          <h4>Will Smith</h4>
          <span>Product Designer</span>
        </div>
      </div>

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
    </section>
  );
};

export default About;
