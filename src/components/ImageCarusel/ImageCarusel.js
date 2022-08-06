import React, { useEffect, useState } from 'react';
import "./imagecarusel.css"
import ImageScroll from './ImageScroll';

function ImageCarusel({images, time}) {

    const [image,setImage] = useState(images[0])
    const [position,setPosition] =useState(0)
    let timer;

    const updatePosition = ()=>{
        timer = !timer && setInterval(() => {
            setPosition(prev => prev + 1)  
          }, time)
          setImage(images[position])
          if(position > images.length-1){
            setPosition(0)
        }
    }


    useEffect(()=>{
        updatePosition()
        return ()=> clearInterval(timer)
        
    },[position])

    return (
        <div>
            <img className="carusel-image" src={image} />
            <ImageScroll count={images.length} selected={position}/>
        </div>
    );
}

export default ImageCarusel;