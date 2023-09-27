import React from "react";
import { BsArrowRight } from 'react-icons/bs';



const Elements=(props)=>{
    return(
        <>
        <div className="col-lg-4 col-sm-6">
       <div className="portfolio-box-layout2">
           <div className="item-img">
                 <img src={props.imgUrl} alt="Project Photo"/>
                 <a href="#test-popup1" data-bs-slide-to={props.slide} className=" item-btn inline-popup">
                 <div data-bs-toggle="modal" data-bs-target="#showProductModal">
                 <BsArrowRight size={50} color={"white"} />

                 </div>
                 </a>
            </div>
        <div className="item-content">
                 <h3 className="item-title">
                 {props.Title} 
                 </h3>
        
        </div>
    </div>
</div>


        </>

    );
}
export default Elements;