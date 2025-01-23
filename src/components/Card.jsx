import React, { useContext } from "react";
import { IoCart, IoEye, IoHeart } from "react-icons/io5";
import ProductContext from "../store/ProductProvider";
import Skelaton from "./Skelaton";
import { ToastContainer } from "react-toastify";

function Card() {
  const { product, loading,notify } = useContext(ProductContext);
  return (
    <div className="container p-0">
      <ToastContainer/>
      <h3>All-Product</h3>
      <hr />
      <div className="row m-0">
        {loading ? (
          (<Skelaton/>)
        ) : (
          product.map((e, i) => {
            return (
              <div className="col-6 col-md-4 col-lg-3 my-2 " key={i}>
                <div className="card overflow-hidden font-jost shadow">
                  <div style={{ height: 210 }} className="w-100">
                    <img
                      src={e.image}
                      alt=""
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="text-1line">{e.name}</h4>
                    <p className="text-3line">{e.description}</p>
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold text-danger">${e.price}</p>
                      <p>{e.rating} rating</p>
                    </div>
                    <div className="d-flex justify-content-center border-top py-1">
                      <button className="btn border-0 fs-3 px-2">
                        <IoHeart />
                      </button>
                      <button onClick={()=>notify('Product add to cart...🎂')} className="btn border-0 fs-3 px-2">
                        <IoCart />
                      </button>
                      <button className="btn border-0 fs-3 px-2">
                        <IoEye />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Card;
