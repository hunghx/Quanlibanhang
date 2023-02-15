import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  let listCart = useSelector((state) => state.listCart);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {listCart.map((cart, index) => (
            <tr key={cart.product.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  className="img-fluid"
                  width={50}
                  src={cart.product.image}
                  alt=""
                />
              </td>
              <td>{cart.product.price}</td>
              <td>{cart.quantity}</td>
              <td>{cart.product.price * cart.quantity}</td>
              <td>Sửa</td>
              <td>Xoá</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
