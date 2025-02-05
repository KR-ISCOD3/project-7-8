import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import ProductContext from "../store/ProductProvider";

function Cart() {
  const { cart, handleQty,DeleteCart } = useContext(ProductContext);
  return (
    <div className="container py-5 ">
      <div className="col-10 mx-auto">
        <table className="table ">
          <thead>
            <tr className="table-dark">
              <th>Product</th>
              <th>Quantity</th>
              <th className="text-end">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.length ? (cart.map((e, i) => {
              return (
                <tr className="align-middle" key={i}>
                  <td className="d-flex align-items-center">
                    <button onClick={()=>DeleteCart(e.id)} className="me-2 btn btn-outline-danger">
                      <FaRegTrashAlt />
                    </button>
                    <div
                      style={{ width: 60, height: 60 }}
                      className=" bg-aqua-200 "
                    >
                      <img
                        src={e.image}
                        alt=""
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>
                    <div className="ms-2">
                      <h5 className="mb-0">{e.name}</h5>
                      <p className="mb-0">${e.price}</p>
                    </div>
                  </td>
                  <td className="col-2">
                    <input
                      value={e.qty}
                      type="number"
                      className="form-control w-50 shadow-none border border-1"
                      onChange={(ev) => handleQty(e.id, ev.target.value)}
                    />
                  </td>
                  <td className="text-end">${e.subtotal.toFixed(2)}</td>
                </tr>
              );
            })):("Your cart is empty")}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
