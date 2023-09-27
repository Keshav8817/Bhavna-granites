import React from "react";
import "./Style.css";
import "./css/normalize.css";
import "./css/bootstrap.min.css";
import "./css/main.css";
import "./css/magnific-popup.css";
import   "./js/main";
import "./Products.css";
import MappingImg from "./MappingImg";
import MappingCaraousels from "./MappingCaraousel";
import { BsFillXCircleFill } from 'react-icons/bs';
import absoluteBlack from './absolute-black.jpg';
import Disp from './Disp';


const Products=()=>{
    return(
        <>
         <section id="products" className="portfolio-wrap-layout2">
            <div className="container">
                <div className="section-heading text-center heading-dark heading-layout2">
                    <h2 >Products</h2>
                    <div className="item-subtitle"></div>
                </div>
                <div className="row">
                <MappingImg />



{/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}

<div id="showProductModal" className="modal fade" >
    <div className="modal-dialog">
        <div className="modal-content non-radius non-border">
           
            <div className="modal-header non-border">
                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true"><BsFillXCircleFill size={20} color={"white"}/></button>
                <h4 className="modal-title"></h4>
            </div>
            <div className="modal-body" >
             {/* <!--begin carousel--> */}
<div id="test-popup1"  className="carousel slide" data-bs-interval="false"  >
<div  className="carousel-inner" data-bs-ride="false"  >
    <div className="carousel-item active ">
        <img src={absoluteBlack} className="display-block w-100" alt="Image1"/>
        <div className="caption carousel-caption d-none d-md-block " >
                <h5 className="modalText" >Absolute Black </h5>
                <a href='#quotes'>
               <div  data-bs-dismiss="modal">
                <button  className='btn btn-secondary btn-lg' type="button">Quotes
                </button></div></a>
        </div>
    </div>
<MappingCaraousels/>    

</div>
<button className="carousel-control-prev" id="controls" type="button" data-bs-target="#test-popup1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#test-popup1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    
        </div>


</div>

 </div>
                </div>
            </div>
            </div>
       
 </div>
</section>




         </>
    );
}
export default Products;