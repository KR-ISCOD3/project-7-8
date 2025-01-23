import React, { useContext } from "react";
import ProductContext from "../store/ProductProvider";

function Skelaton() {
  const { product } = useContext(ProductContext);
  return (
    <div>
      <div className="row m-0" >
        {product.map((_, i) => {
          return (
            <div className="col-6 col-md-4 col-lg-3 my-2" key={i}>
              <div className="card" aria-hidden="true">
                <img
                  src="..."
                  className="card-img-top bg-secondary-subtle"
                  alt="..."
                  style={{ height: 200 }}
                />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    className="btn btn-primary disabled placeholder col-6"
                    aria-disabled="true"
                  ></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skelaton;
