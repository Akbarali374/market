import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
    
        <div className="contact-info">
          <div className="info-box">
            <div className="icon phone">📞</div>
            <h3>Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <span>Phone: +880161112222</span>
          </div>

          <hr />

          <div className="info-box">
            <div className="icon mail">✉️</div>
            <h3>Write To Us</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <span>Email: customer@exclusive.com</span>
            <span>Email: support@exclusive.com</span>
          </div>
        </div>

   
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="tel" placeholder="Your Phone *" />
          </div>

          <textarea placeholder="Your Message"></textarea>

          <button className="contactbtn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;