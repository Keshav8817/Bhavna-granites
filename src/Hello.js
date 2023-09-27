import React from 'react';
import logo from './logo6_m1.png';
import img1 from './floor5.jpg';
import img2 from './kitchen5_1.jpg';
import img3 from './bathroom5_1.jpg';
import './Hello.css';
import Products from "./Components/Products";
import'./Components/css/astyle.css'
import StickyHeader from 'react-sticky-header';
import Disp from "./Components/Disp";


const Hello
=()=>{
    return(
        <>      
        

          <header id="header_1">
            <div class="header-menu-area header-menu-layout2 box-layout-child">
            
                <div class="full-width-container">
                <div class="sticky">    
                    <div class="row no-gutters d-flex align-items-center">
                    
                        <div class="col-lg-2 col-md-2 d-flex justify-content-start">
                            <div class="logo-area">
                                <a href="index.html" class="temp-logo">
                                    <img src={logo} alt="logo" class="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 d-flex justify-content-center possition-static">
                            <div class="template-main-menu">
                                <div class ="header-links">
                                <nav id="dropdown">
                                    <ul>
                                        <li>
                                            <a href="#">HOME</a>
                                            
                                        </li>
                                        <li>
                                            <a href="#about">ABOUT US</a>
                                            
                                        </li>
                                        <li>
                                            <a href="#products">Products</a>
                                        </li>
                                        
                                        <li>
                                            <a href="#quotes">Quote</a>
                                        </li>

                                        <li>
                                            <a href="#contact">CONTACT US</a>
                                        </li>
                                        
                                    </ul>
                                </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </header> 
        <section class="slider-wrap-layout1 box-layout-child-4">
            
                <div class="container-fluid">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="2000" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="slide"></button>
                            <button  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"  class="slide"></button>
                        </div>
                    <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img className="d-block w-100 kit-img" id="im" src={img2} alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 kit-img" id="im" src={img1} alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 kit-img" id="im" src={img3} alt="Third slide" />
                            </div>
                    </div>
                    <button class="carousel-control-prev" role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" role="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                        <span class="sr-only">Next</span>
                    </button>
                    </div>
                </div>
                
            
            
        </section>
        <body  id ="about">
        <div  className="container1">
        <div class="breadcrumbs-area">
                <div className="section-heading text-center heading-dark heading-layout2">
                    <h2>About Us</h2>
                    <div className="text">Bhavana Granites provides top quality Granites to suit your needs with our wide range of selections of natural stones of<br></br>otherworldly design which becomes a feast for your eyes. Our comapany has been providing satisfactory services<br></br> to our customers</div>
                </div>
                </div>
                </div>
        </body>
        </>


);
}

export default Hello;