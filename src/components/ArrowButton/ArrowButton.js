import React from 'react';
import "./arrowbutton.css"

function ArrowButton({size,type, onClick}) {

    if(type==="back"){
        return(
            <button onClick={onClick}  className="button">
                <svg className="arrow-button" width={size} height={size}  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C77.5709 0 100 22.4291 100 50C100 77.5709 77.5709 100 50 100C22.4291 100 0 77.5709 0 50C0 22.4291 22.4291 0 50 0ZM34.5541 52.9459L55.3875 73.7791C56.2 74.5916 57.2666 75 58.3334 75C59.4 75 60.4668 74.5916 61.2793 73.7791C62.9084 72.15 62.9084 69.5166 61.2793 67.8875L43.3916 50L61.2791 32.1125C62.9082 30.4834 62.9082 27.85 61.2791 26.2209C59.65 24.5918 57.0166 24.5918 55.3875 26.2209L34.5541 47.0543C32.925 48.6834 32.925 51.3166 34.5541 52.9459Z" fill="#32FDCD"/>
                </svg>
            </button>
        )
    } 
    if(type==="next"){
        return(
            <button onClick={onClick}  className="button">
                <svg className="arrow-button" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C22.4291 0 0 22.4291 0 50C0 77.5709 22.4291 100 50 100C77.5709 100 100 77.5709 100 50C100 22.4291 77.5709 0 50 0ZM65.4459 52.9459L44.6125 73.7791C43.8 74.5916 42.7334 75 41.6666 75C40.6 75 39.5332 74.5916 38.7207 73.7791C37.0916 72.15 37.0916 69.5166 38.7207 67.8875L56.6084 50L38.7209 32.1125C37.0918 30.4834 37.0918 27.85 38.7209 26.2209C40.35 24.5918 42.9834 24.5918 44.6125 26.2209L65.4459 47.0543C67.075 48.6834 67.075 51.3166 65.4459 52.9459Z" fill="#32FDCD"/>
                </svg>
            </button>
        )
            
    }
    
}

export default ArrowButton;