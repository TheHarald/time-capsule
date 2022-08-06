import React from 'react';
import "./infoitem.css"

function InfoImage({image}) {
    let infoImage
    switch(image){
        case "email":
            infoImage = <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M292.75 188.751C286.816 195.876 278.024 199.997 268.75 200.001H31.2503C21.9773 199.997 13.1847 195.876 7.25037 188.751L121.875 93.2505L133.751 101.376C143.533 108.126 156.469 108.126 166.251 101.376L178.126 93.2505L292.75 188.751Z" fill="#1E88E5"/>
            <path d="M294.5 13.6258L178.125 93.2505L166.25 101.376C156.468 108.126 143.532 108.126 133.75 101.376L121.875 93.2505L5.50073 13.5004C11.3566 5.05648 20.9747 0.0139077 31.2509 0.000431136H268.75C279.073 -0.054061 288.739 5.05999 294.5 13.6258Z" fill="#64B5F6"/>
            <path d="M121.875 93.2505L7.25035 188.751C2.55876 183.143 -0.00823358 176.062 0.000555472 168.751V31.2508C-0.0375304 24.9092 1.88376 18.71 5.50074 13.501L121.875 93.2505Z" fill="#2196F3"/>
            <path d="M300 31.2505V168.751C300.008 176.062 297.442 183.143 292.75 188.75L178.125 93.2502L294.5 13.6255C298.099 18.797 300.019 24.9499 300 31.2505Z" fill="#2196F3"/>
            </svg>;
            break;
            
         case "gift":
            infoImage= <svg width="280" height="276" viewBox="0 0 280 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M141.449 41.7418C141.449 41.7418 164.014 -5.00778 217.907 0.441962C220.311 0.709346 222.49 1.98051 223.906 3.94174C229.83 11.8349 232.871 21.5189 232.523 31.3821C231.505 49.3932 165.001 63.2671 165.001 63.2671L150.906 60.4674L141.449 41.7418Z" fill="#F6C863"/>
            <path d="M197.677 48.9205C183.919 54.0628 169.355 56.7091 154.669 56.736C174.285 39.0041 199.265 28.3351 225.638 26.4227C228.746 26.1672 229.908 29.7234 227.769 31.9946C222.95 37.0974 210.7 43.9504 197.677 48.9205V48.9205Z" fill="#EAB54E"/>
            <path d="M141.439 41.7418C141.439 41.7418 118.874 -5.00778 64.9811 0.441962C62.5771 0.709346 60.398 1.98051 58.9822 3.94174C53.0578 11.8349 50.017 21.5189 50.3652 31.3821C51.384 49.3932 117.887 63.2671 117.887 63.2671L131.982 60.4674L141.439 41.7418Z" fill="#F6C863"/>
            <path d="M85.2108 48.9205C98.9682 54.0628 113.532 56.7091 128.219 56.736C117.248 46.9762 104.628 39.2446 90.9511 33.9019C80.1174 29.8611 68.7752 27.3445 57.2495 26.4227C54.1417 26.1672 52.9795 29.7234 55.118 31.9946C59.9202 37.0974 72.2048 43.9504 85.2108 48.9205V48.9205Z" fill="#EAB54E"/>
            <path d="M140.011 74.2569C149.351 74.2569 156.923 66.6851 156.923 57.3448C156.923 48.0045 149.351 40.4326 140.011 40.4326C130.67 40.4326 123.098 48.0045 123.098 57.3448C123.098 66.6851 130.67 74.2569 140.011 74.2569Z" fill="#EAB54E"/>
            <path d="M3.46847 57.3413H276.532C278.447 57.3413 280 58.8943 280 60.8098V105.911C280 107.826 278.447 109.379 276.532 109.379H3.46847C1.55295 109.379 0 107.826 0 105.911V60.8098C0 58.8943 1.55295 57.3413 3.46847 57.3413V57.3413Z" fill="#EF5261"/>
            <path d="M266.203 99.8389V271.574C266.198 273.487 264.648 275.036 262.735 275.042H17.2829C15.3699 275.036 13.8201 273.487 13.8144 271.574V99.8389H266.203Z" fill="#EF5261"/>
            <path d="M13.8144 109.38H266.207V121.521H13.8144V109.38Z" fill="#DA364C"/>
            <path d="M119.707 57.3413H160.31V275.038H119.707V57.3413Z" fill="#F6C863"/>
            <path d="M119.696 109.38H160.321V121.521H119.696V109.38Z" fill="#EAB54E"/>
            </svg>;
            break;
            
         case "capsule":
            infoImage = <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M81.0469 82.0645L20.1094 143.003C-6.70313 169.664 -6.70313 213.236 20.1094 239.896C46.5989 266.692 90.4917 266.711 117 239.896C122.328 234.924 109.909 246.988 177.938 178.957L145.638 114.261L81.0469 82.0645Z" fill="url(#paint0_linear_166_17)"/>
            <path d="M239.786 20.1099C213.126 -6.70329 169.556 -6.70329 142.895 20.1099L81.0469 82.0645L177.938 178.957C194.086 162.809 241.31 115.479 241.462 115.327C266.751 88.2087 266.141 46.3131 239.786 20.1099V20.1099Z" fill="url(#paint1_linear_166_17)"/>
            <defs>
            <linearGradient id="paint0_linear_166_17" x1="20.148" y1="239.936" x2="192.958" y2="67.1304" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A93AFF"/>
            <stop offset="1" stopColor="#FF81FF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_166_17" x1="129.466" y1="130.485" x2="239.815" y2="20.1384" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFBEF9"/>
            <stop offset="1" stopColor="#FFF1FF"/>
            </linearGradient>
            </defs>
            </svg>;
            break;
            
         case "box": 
            infoImage = <svg width="257" height="300" viewBox="0 0 257 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M121.007 1.83154L5.21919 63.2992C2.00746 65.0041 0 68.3427 0 71.9799V226.276C0 232.509 3.50214 238.211 9.05946 241.03L122.603 298.62C126.226 300.458 130.508 300.458 134.13 298.62L247.675 241.03C253.232 238.211 256.735 232.508 256.735 226.276V71.9799C256.735 68.3427 254.727 65.0041 251.514 63.2992L135.727 1.83154C131.126 -0.610513 125.61 -0.610513 121.007 1.83154Z" fill="#FFCE94"/>
            <path d="M128.368 300C130.344 300 132.321 299.541 134.131 298.622L247.676 241.032C253.233 238.213 256.736 232.51 256.736 226.278V71.98C256.736 70.3736 256.325 68.8363 255.611 67.4614L128.368 135.233V300Z" fill="#FCB043"/>
            <path d="M128.368 135.233L1.12507 67.4604C0.410224 68.8353 0 70.3726 0 71.979V226.276C0 232.509 3.50214 238.211 9.05946 241.03L122.603 298.62C124.415 299.539 126.391 299.998 128.367 299.998V135.233H128.368Z" fill="#E2791B"/>
            <path d="M173.733 22.0068L44.9572 90.5864V112.53C44.9572 114.636 46.1188 116.571 47.977 117.562L70.3565 129.49C72.1325 130.436 74.276 129.15 74.276 127.137V106.656L203.252 37.6776L173.733 22.0068Z" fill="#DEF2FC"/>
            <path d="M146.918 256.212L181.272 239.782C185.671 237.679 188.426 233.19 188.31 228.316L188.307 228.164C188.212 224.143 183.943 221.605 180.365 223.443L146.919 240.62V256.212H146.918V256.212Z" fill="#403A46"/>
            <path d="M146.918 280.17L165.783 271.406C170.25 269.329 173.064 264.805 172.947 259.88C172.852 255.845 168.559 253.308 164.978 255.173L146.918 264.575V280.17Z" fill="#403A46"/>
            <path d="M44.9562 90.8066V112.53C44.9562 114.636 46.1178 116.571 47.976 117.562L70.3556 129.49C72.1315 130.436 74.275 129.149 74.275 127.137V106.656L74.4934 106.539C66.9133 102.502 54.6015 95.9436 44.9562 90.8066Z" fill="#B6C8CE"/>
            </svg>;
            break;
         
    }
    return (
        <div className="image-container">
            {infoImage}
        </div>
    );
}

export default InfoImage;