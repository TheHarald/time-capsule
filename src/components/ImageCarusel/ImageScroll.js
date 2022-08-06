import React from 'react';
import "./imagecarusel.css"

function ImageScroll({count,selected}) {
    return (
        <div className="image-scroll">
        {
            [...Array(count)].map((e,i)=>{
                if(selected === i){
                    return ( <span key={i} className=" long dot selected"></span>)
                }else{
                    if(i===0 || i === count-1){
                        return (<span key={i} className="not-selected dot"></span>)
                    }
                    return(<span key={i} className="not-selected long dot"></span>)
                }
            })
        }

            
        </div>
    );
}

export default ImageScroll;