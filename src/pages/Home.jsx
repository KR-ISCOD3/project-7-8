import React, { useContext } from 'react'
import { ImCoinDollar } from 'react-icons/im'
import { IoMdClock } from 'react-icons/io'
import { IoCar, IoGift } from 'react-icons/io5'
import ProductContext from '../store/ProductProvider'
import Card from '../components/Card'

function Home() {
  const {product} = useContext(ProductContext)
  return (
    <div className='container-fluid p-0'>
        <div className='container p-0 pt-3 '>
            {/* Hero */}
            <div id="carouselExampleInterval" className="carousel slide shadow rounded-3" data-bs-ride="carousel">
                <div className="carousel-inner position-relative font-jost">
                    <div className="carousel-item rounded-3 overflow-hidden active " data-bs-interval="10000" style={{height:"65vh"}}>
                        <div className='position-absolute z-3 top-50 start-50 translate-middle text-center text-light'>
                            <h1 className=''>THE BIGGEST SALE</h1>
                            <h2 className='fw-normal'>Specail for today</h2>
                            <button className='btn btn-outline text-light mt-3'>Shop Now</button>
                        </div>
                        <img src="https://www.stuff.tv/wp-content/uploads/sites/2/2021/04/Stuff-Best-Laptop-Lead.png" style={{filter:"brightness(60%)"}}  className="d-block w-100 h-100 object-fit-cover" alt="..."/>  
                    </div>
                    <div className="carousel-item rounded-3 overflow-hidden" data-bs-interval="2000" style={{height:"65vh"}}>
                        <div className='position-absolute z-3 top-50 start-50 translate-middle text-center text-light'>
                                <h1 className=''>THE BEST PROMOTION</h1>
                                <h2 className='fw-normal'>Specail for today</h2>
                                <button className='btn text-light mt-3'>Shop Now</button>
                        </div>
                            <img src="https://www.apple.com/v/iphone/home/by/images/meta/iphone__kqge21l9n26q_og.png" style={{filter:"brightness(60%)"}}  className="d-block w-100 h-100 object-fit-cover" alt="..."/>
                    </div>
                    <div className="carousel-item rounded-3 overflow-hidden" style={{height:"65vh"}}>
                        <div className='position-absolute z-3 top-50 start-50 translate-middle text-center text-light'>
                                <h1 className=''>AND BEST QUALITY</h1>
                                <h2 className='fw-normal'>Specail for today</h2>
                                <button className='btn text-light mt-3'>Shop Now</button>
                            </div>
                            <img src="https://cdn.thewirecutter.com/wp-content/media/2023/10/instantcameras-2048px-02039.jpg" style={{filter:"brightness(60%)"}}  className="d-block w-100 h-100 object-fit-cover" alt="..."/>
                        </div>
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Service */}
            <div className='d-flex justify-content-start my-3 overflow-auto font-jost'>
                <div className="col-12 col-md-6 col-lg-3 px-3 my-3" >
                    <div className='d-flex align-items-center justify-content-center shadow p-3 rounded-3'>
                        <IoGift style={{fontSize:84}}/>
                        <div className='ms-3 '>
                            <h5 className='m-0'>BONUS PLUS</h5>
                            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 px-3 my-3" >
                    <div className='d-flex align-items-center justify-content-center shadow p-3 rounded-3'>
                        <IoCar style={{fontSize:84}}/>
                        <div className='ms-3'>
                            <h5 className='m-0'>FREE SHIPPING</h5>
                            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 px-3 my-3" >
                    <div className='d-flex align-items-center justify-content-center shadow p-3 rounded-3'>
                        <ImCoinDollar style={{fontSize:84}}/>
                        <div className='ms-3'>
                            <h5 className='m-0'>SPECAIL PRICE</h5>
                            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 px-3 my-3" >
                    <div className='d-flex align-items-center justify-content-center shadow p-3 rounded-3'>
                        <IoMdClock style={{fontSize:84}}/>
                        <div className='ms-3'>
                            <h5 className='m-0'>OPENING 24/7</h5>
                            <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row m-0 py-5'>
                
                <div className="col-lg-5 p-0 pe-lg-3" style={{height:630}}>
                    <div className='w-100 bg-danger h-responesive position-relative' style={{height:"60%"}}>
                        <div className='position-absolute z-3  text-light' style={{top:"20%",left:"10%"}}>
                            <h4 className=''>THE BIGGEST SALE</h4>
                            <p className='fw-normal m-0'>Specail for today</p>
                            <button className='btn btn-outline-light mt-3 text-uppercase'>Shop Now</button>
                        </div>
                        <img src="https://assets-eu-01.kc-usercontent.com/77bbf83a-1306-0152-fea5-3b5eaf937634/ce30243a-b759-4747-ae74-a685a9eb2a35/GettyImages-1317610306.jpg" alt="" className='w-100 h-100 object-fit-cover' style={{filter:"brightness(50%)"}}/>
                    </div>
                    <div className='row m-0 pt-3 h-responesive' style={{height:"40%"}}>
                        <div className="col-12 col-lg-6 p-0 pe-lg-2 ">
                            <div className='w-100 bg-warning h-100 position-relative s1-img'>
                                <div style={{backgroundColor: "rgba(0, 0, 0, 0.503)"}} className='w-100 h-100 py-1  position-absolute z-3  text-light text-center top-50 start-50 translate-middle w-100 ' >
                                    <h5 className="mt-lg-4">THE BIGGEST SALE</h5>
                                    <p className='fw-normal m-0'>Specail for today</p>
                                    <button className='btn btn-outline-light mt-3 text-uppercase fs-6'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-0 ps-lg-2 my-lg-0 my-2">
                            <div className='w-100 bg-aqua-500 h-100 position-relative'>
                                <div className='w-100 bg-warning h-100 position-relative s1-img'>
                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.503)"}} className='w-100  h-100 py-1 position-absolute z-3  text-light text-center top-50 start-50 translate-middle w-100' >
                                        <h5 className='mt-lg-4'>THE BIGGEST SALE</h5>
                                        <p className='fw-normal m-0'>Specail for today</p>
                                        <button className='btn btn-outline-light mt-3 text-uppercase fs-6'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 p-0 pe-lg-2" style={{height:630}}>
                     <div className='row m-0 pb-3 h-responesive' style={{height:"40%"}}>
                        <div className="col-12 col-lg-6 p-0 pe-lg-2 ">
                            <div className='w-100 bg-warning h-100 position-relative s1-img'>
                                <div style={{backgroundColor: "rgba(0, 0, 0, 0.503)"}} className='w-100 h-100 py-1  position-absolute z-3  text-light text-center top-50 start-50 translate-middle w-100 ' >
                                    <h5 className="mt-lg-4">THE BIGGEST SALE</h5>
                                    <p className='fw-normal m-0'>Specail for today</p>
                                    <button className='btn btn-outline-light mt-3 text-uppercase fs-6'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-0 ps-lg-2 my-lg-0 my-2">
                            <div className='w-100 bg-aqua-500 h-100 position-relative'>
                                <div className='w-100 bg-warning h-100 position-relative s1-img'>
                                    <div style={{backgroundColor: "rgba(0, 0, 0, 0.503)"}} className='w-100  h-100 py-1 position-absolute z-3  text-light text-center top-50 start-50 translate-middle w-100' >
                                        <h5 className='mt-lg-4'>THE BIGGEST SALE</h5>
                                        <p className='fw-normal m-0'>Specail for today</p>
                                        <button className='btn btn-outline-light mt-3 text-uppercase fs-6'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-100 bg-danger h-responesive position-relative' style={{height:"60%"}}>
                        <div className='position-absolute z-3  text-light' style={{top:"20%",left:"10%"}}>
                            <h4 className=''>THE BIGGEST SALE</h4>
                            <p className='fw-normal m-0'>Specail for today</p>
                            <button className='btn btn-outline-light mt-3 text-uppercase'>Shop Now</button>
                        </div>
                        <img src="https://assets-eu-01.kc-usercontent.com/77bbf83a-1306-0152-fea5-3b5eaf937634/ce30243a-b759-4747-ae74-a685a9eb2a35/GettyImages-1317610306.jpg" alt="" className='w-100 h-100 object-fit-cover' style={{filter:"brightness(50%)"}}/>
                    </div>
                   
                </div>

            </div>
            <Card />
        </div>
    </div>
  )
}

export default Home