import "../components/Product.css";

function ProductCard({ title, price }) {
  return (
    <div className="product-card">
      <div className="image-box">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWdCgCjG7l7klMrTkzVzPRM9cXzje-7IXjg&s"
          alt=""
        />
        <button className="add-cart">Add to cart</button>
      </div>

      <h3>HAVIT HV-G92 Gamepad</h3>
      <p>G92</p>
    </div>
  );
}

export default ProductCard;
