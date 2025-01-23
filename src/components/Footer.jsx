import React from "react";
import { IoMdClock } from "react-icons/io";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className="container-fluid bg-aqua-700 mb-5 pb-5 mb-lg-0 py-lg-3 font-jost text-light">
      <div className="container pt-4">
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 pb-3 text-center">
            <h3 className="fw-bold m-0">Subcribe Our Newlette</h3>
            <p className="m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-lg-6 pb-3 ">
            <form action="" className="d-flex ">
              <input
                type="text"
                className="form-control rounded-0 shadow-none border-0 py-3"
                placeholder="Type to search..."
              />
              <button className="btn btn-dark rounded-0 shadow-none px-4">
                Subcribe
              </button>
            </form>
          </div>
        </div>
        <div className="row m-0 border-top border-secondary-subtle py-3">
          <div className="row m-0 col-lg-6 py-3 px-0">
            <div className="col-md-6">
              <h4>Useful Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="nav-link py-1">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1">
                    All-Product
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1">
                    My Account
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 ">
              <h4>Contact Information</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="nav-link py-1">
                    <IoLocation className="fs-4 me-2" />
                    2020,Phnom Penh
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1">
                    <IoCall className="fs-4 me-2" />
                    +855 000 000 000
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1">
                    <IoMail className="fs-4 me-2" />
                    example@gmail.com
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1">
                    <IoMdClock className="fs-4 me-2" />
                    Mon - Sun / 24h
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994723.575080327!2d99.95464193666555!3d12.105495152204771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2skh!4v1736858490016!5m2!1sen!2skh"
              width="100%"
              height="250"
              style={{border:0}}
              // allowfullscreen=""
            //   loading="lazy"
              
            ></iframe>
          </div>
        </div>
        <div className="row m-0 border-top border-secondary-subtle">
          <div className="col-6 py-2">
            Copy right © 2025 All Right Deserved
          </div>
          <div className="col-6 py-2 text-md-end">
            Design & Developer by RokRakTeam
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
