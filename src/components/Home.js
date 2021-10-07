import React from "react";

function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            alt="Iphone"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeih0NHS10nN7sP664nOyQuVwJCGwNjx2mnMJ_ps7Iw_nVToLy2wsz7XonJOrgwNNwlQI&usqp=CAU"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $78000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ price: 78000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
