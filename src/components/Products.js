import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const listProduct = useSelector((state) => state.listProduct);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleBuy = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity: 1 },
    });
    navigate("/cart");
  };
  return (
    <section className="products_section">
      <div className="heading_container">
        <h2>New Products In Store</h2>
        <p>Featured Product Just Arrived</p>
      </div>
      <div className="container layout_padding">
        <div className="product_container">
          {listProduct.map((product) => (
            <div key={product.id} className="product_box">
              <div className="product_img-box">
                <img src={product.image} alt="" />
                <button
                  onClick={() => handleBuy(product)}
                  className="btn btn-danger"
                >
                  {" "}
                  Sale{" "}
                </button>
              </div>
              <div className="product_detail-box">
                <span> ${product.price}.00 </span>
                <p>{product.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
