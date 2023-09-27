import React from 'react';
import ProductsLoops from './ProductsLoop';
import Caraousels from './Caraousels';
import CaraouselArray from './CaraouselArray';



const MappingCaraousels=()=>{
    return(
        <>
        {CaraouselArray.map(
                        (item, index) => {
                            return (
                                <Caraousels imgUrl={item.url} Title={item.title}  />

                            ) 
                               
        
}
)
}







        </>
    )





}
export default MappingCaraousels;

