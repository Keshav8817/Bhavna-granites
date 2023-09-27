import React from 'react';
import ProductsLoops from './ProductsLoop';
import Elements from './Elements';




const MappingImg=()=>{
    return(
        <>
        {ProductsLoops.map(
                        (item, index) => {
                            return (
                                <Elements imgUrl={item.url} Title={item.title} slide={item.slide} />

                            ) 
                               
        
}
)
}







        </>
    )





}
export default MappingImg

