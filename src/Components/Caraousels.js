import React from "react";
const Caraousels=(props)=>{
    return(
        <>
            <div className="carousel-item">

        <img src={props.imgUrl} className="display-block w-100" alt="Image1"/>
        <div class="caption carousel-caption d-none d-md-block">
          <h5>{props.Title}</h5>
          <a href='#quotes'>
               <div  data-bs-dismiss="modal">
                <button  className='btn btn-secondary btn-lg' type="button">Quotes
                </button></div></a>
        </div>
        </div>


        </>
    );
}
export default Caraousels;