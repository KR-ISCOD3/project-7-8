import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

function Bottombar() {
  return (
    <div className='d-lg-none container-fluid bg-aqua-700 fixed-bottom py-3'>
      <div className="nav justify-content-between">
        <a href="" className="text-center text-light text-decoration-none py-2">     
          <FaHome className="fs-2"/>
          <p className="m-0">Home</p>
        </a> 
        <a href="" className="text-center text-light text-decoration-none py-2">     
          <AiFillProduct className="fs-2"/>
          <p className="m-0">Product</p>
        </a> 
        <a href="" className="text-center text-light text-decoration-none py-2">     
          <MdPermContactCalendar className="fs-2"/>
          <p className="m-0">Contact</p>
        </a> 
        <a href="" className="text-center text-light text-decoration-none py-2">     
          <IoMdCart className="fs-2"/>
          <p className="m-0">Cart</p>
        </a> 
        <a href="" className="text-center text-light text-decoration-none py-2">     
          <MdAccountCircle className="fs-2"/>
          <p className="m-0">Account</p>
        </a> 
      </div>
    </div>
  )
}

export default Bottombar
