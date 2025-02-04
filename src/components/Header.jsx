import { useContext, useState } from "react";
import { IoMdCart, IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ProductContext from "../store/ProductProvider";
function Header() {
  const { data, cart } = useContext(ProductContext);
  const [isLoggin, setIsloggin] = useState(true);

  // alert(data);
  return (
    <>
      <nav className="container-fluid navbar bg-aqua-700">
        <div className="container font-jost py-3">
          <div className="col-3 ">
            <a href="" className="fw-bold text-decoration-none text-light fs-3">
              LOGO
            </a>
          </div>
          <div className="col-9 col-lg-6 bg-body rounded-5 overflow-hidden">
            <form action="" className="d-flex ">
              <select className="form-select border w-50 d-none d-md-block rounded-0 shadow-none border-start ps-lg-4">
                <option value="">All Categaries</option>
                <option value="laptop">Laptop</option>
                <option value="phone">Phone</option>
              </select>
              <input
                type="text"
                className="form-control rounded-0 shadow-none border-0"
                placeholder="Type to search..."
              />
              <button className="btn border-0 shadow-none">
                <IoMdSearch />
              </button>
            </form>
          </div>
          <div className="d-none d-lg-flex align-items-center justify-content-end col-3 ">
            <NavLink
              to="/cart"
              className="text-light text-decoration-none position-relative "
            >
              <IoMdCart className="fs-3" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </NavLink>
            {isLoggin ? (
              <div className="ms-4">
                <div className="dropdown d-flex">
                  <div
                    style={{ width: 40, height: 40 }}
                    className="rounded-circle bg-aqua-300 overflow-hidden border"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenp49lG3DDWsWxhb2eiwRcDXva9Cs1aG7hA&s"
                      alt=""
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <button
                    className="btn border-0 shadow-none text-light dropdown-toggle ps-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User account
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Setting
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className=" ms-4">
                <button className="btn btn-light rounded-0 px-3">
                  Register
                </button>
                <button className="btn border rounded-0 text-light px-3">
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="container-fluid shadow d-none d-lg-block">
        <ul className="nav justify-content-center">
          <li className="px-2 py-1 text-uppercase">
            <NavLink to="/" className="text-dark text-decoration-none">
              Home
            </NavLink>
          </li>
          <li className="px-2 py-1 text-uppercase">
            <NavLink to={"/product"} className="text-dark text-decoration-none">
              All-Product
            </NavLink>
          </li>
          <li className="px-2 py-1 text-uppercase">
            <NavLink to="/contact" className="text-dark text-decoration-none">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
