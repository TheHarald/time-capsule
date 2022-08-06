import React from 'react';
import "./items.css"

function Items({item, position}) {


    switch(item){
        case "folder":  
            return(
                <svg className="folder" width="82" height="75"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9111 16.7012L26.6075 19.2C28.8107 21.2417 28.0614 24.8926 25.2321 25.9015L7.54933 32.207C5.46853 32.949 3.1802 31.8637 2.43821 29.7829L1.3435 26.7129C0.601504 24.6321 1.68683 22.3438 3.76763 21.6018L19.8487 15.8675C21.2524 15.3669 22.818 15.6882 23.9111 16.7012Z" fill="#EBBF6C"/>
                <rect x="1.64429" y="27.5562" width="67.5557" height="49.4429" rx="13" transform="rotate(-19.6257 1.64429 27.5562)" fill="url(#paint0_linear_124_90)"/>
                <defs>
                <linearGradient id="paint0_linear_124_90" x1="94.1662" y1="41.9974" x2="-3.74059" y2="57.4177" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EABB66"/>
                <stop offset="1" stopColor="#B88A37"/>
                </linearGradient>
                </defs>
                </svg>
            )

    case "smile":  
        return(
            <svg className="smile" width="117" height="117"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5927 44.5852C22.2572 20.3548 48.1133 6.92522 72.3445 14.5899C96.5749 22.2543 110.004 48.1104 102.34 72.3409C94.6754 96.572 68.8192 110.002 44.5888 102.337C20.3576 94.6725 6.92811 68.8163 14.5927 44.5852Z" fill="url(#paint0_linear_124_68)"/>
            <path d="M46.802 45.4107C45.3543 44.9528 44.5519 43.4079 45.0096 41.9608L45.2621 41.1625C45.6889 39.8133 44.9388 38.369 43.5895 37.9422C42.241 37.5156 40.7967 38.2658 40.3699 39.615L40.1174 40.4133C39.6596 41.8604 38.1148 42.6628 36.667 42.2049C35.2192 41.7469 34.4168 40.2021 34.8746 38.755L35.1271 37.9567C36.4681 33.7172 41.0083 31.3591 45.2477 32.7001C49.4877 34.0413 51.8452 38.5813 50.5043 42.8207L50.2517 43.619C49.794 45.0661 48.2492 45.8685 46.802 45.4107Z" fill="#282D35"/>
            <path d="M83.6978 56.2364C82.25 55.7785 81.4476 54.2336 81.9054 52.7865L82.1579 51.9882C82.5847 50.639 81.8345 49.1947 80.4853 48.7679C79.1367 48.3413 77.6924 49.0915 77.2656 50.4407L77.0131 51.239C76.5554 52.6861 75.0105 53.4885 73.5627 53.0306C72.115 52.5726 71.3126 51.0278 71.7703 49.5806L72.0228 48.7823C73.3638 44.5429 77.904 42.1848 82.1434 43.5258C86.3835 44.867 88.741 49.407 87.4 53.6464L87.1475 54.4447C86.6898 55.8918 85.1449 56.6942 83.6978 56.2364V56.2364Z" fill="#282D35"/>
            <path d="M29.751 54.9533C34.1573 56.347 38.2655 55.7822 38.9267 53.6916C39.588 51.601 36.552 48.7764 32.1457 47.3826C27.7393 45.9888 23.6312 46.5536 22.9699 48.6442C22.3086 50.7348 25.3446 53.5595 29.751 54.9533Z" fill="#F97E58"/>
            <path d="M83.1118 71.8317C87.5182 73.2255 91.6263 72.6606 92.2876 70.57C92.9489 68.4794 89.9129 65.6548 85.5065 64.261C81.1001 62.8672 76.992 63.4321 76.3307 65.5226C75.6694 67.6132 78.7054 70.4379 83.1118 71.8317Z" fill="#F97E58"/>
            <path d="M49.8104 85.1679C40.9175 82.355 35.9711 72.8315 38.784 63.9386C39.0407 63.1271 39.9066 62.6773 40.7177 62.9339L70.0353 72.2074C70.8468 72.4641 71.2965 73.3301 71.0399 74.1415C68.2269 83.0344 58.7033 87.9809 49.8104 85.1679Z" fill="#282D35"/>
            <path d="M53.5402 73.3767C48.7907 71.8743 43.6965 72.5256 39.1689 75.2057C40.9722 79.7964 44.7526 83.5678 49.8105 85.1676C54.8684 86.7675 60.13 85.8563 64.2453 83.1377C62.0826 78.3414 58.2896 74.879 53.5402 73.3767Z" fill="url(#paint1_linear_124_68)"/>
            <defs>
            <linearGradient id="paint0_linear_124_68" x1="14.5926" y1="44.5856" x2="102.34" y2="72.3412" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE83E"/>
            <stop offset="1" stopColor="#FFB600"/>
            </linearGradient>
            <linearGradient id="paint1_linear_124_68" x1="39.1371" y1="75.3061" x2="64.2136" y2="83.2382" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E84D00"/>
            <stop offset="0.3627" stopColor="#D43917"/>
            <stop offset="0.7208" stopColor="#C62C27"/>
            <stop offset="1" stopColor="#C1272D"/>
            </linearGradient>
            </defs>
            </svg>
            )


            case "list":  
            return(
                <svg className="list" width="83" height="94"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="21.0957" width="63.1499" height="80.2836" rx="13" transform="rotate(15 21.0957 0)" fill="url(#paint0_linear_124_86)"/>
                <path d="M24.9532 17.758C25.373 16.1911 26.9836 15.2613 28.5505 15.6811L67.7974 26.1973C69.3643 26.6171 70.2941 28.2277 69.8743 29.7946C69.4544 31.3615 67.8438 32.2914 66.2769 31.8715L27.0301 21.3553C25.4632 20.9355 24.5333 19.3249 24.9532 17.758Z" fill="#4B4B4B"/>
                <path d="M21.4056 30.9979C21.8254 29.431 23.436 28.5012 25.0029 28.921L64.2497 39.4372C65.8166 39.857 66.7465 41.4676 66.3266 43.0345C65.9068 44.6014 64.2962 45.5313 62.7293 45.1114L23.4825 34.5952C21.9156 34.1754 20.9857 32.5648 21.4056 30.9979Z" fill="#4B4B4B"/>
                <path d="M17.8579 44.2378C18.2778 42.6709 19.8884 41.7411 21.4553 42.1609L53.6093 50.7766C55.1762 51.1964 56.1061 52.807 55.6862 54.3739C55.2664 55.9408 53.6558 56.8707 52.0889 56.4508L19.9348 47.8351C18.368 47.4153 17.4381 45.8047 17.8579 44.2378Z" fill="#4B4B4B"/>
                <path d="M14.3103 57.4777C14.7302 55.9108 16.3407 54.981 17.9076 55.4008L41.5503 61.7358C43.1172 62.1557 44.0471 63.7663 43.6272 65.3332C43.2074 66.9001 41.5968 67.8299 40.0299 67.4101L16.3872 61.0751C14.8203 60.6552 13.8905 59.0446 14.3103 57.4777Z" fill="#4B4B4B"/>
                <defs>
                <linearGradient id="paint0_linear_124_86" x1="78.616" y1="-8.45939e-07" x2="21.0957" y2="84.1999" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EAEAEA"/>
                <stop offset="1" stopColor="#B3B3B3"/>
                </linearGradient>
                </defs>
                </svg>
            )
            case "heart":  
            return(
                <svg className="heart" width="126" height="113"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.3444 99.0865C49.4821 98.5875 47.7349 97.6468 46.2918 96.3661C41.9304 92.4956 33.5426 84.4549 26.3756 74.0888C17.0521 60.6039 12.8459 47.6841 13.874 35.6883C14.6727 26.3696 19.3676 17.8962 26.7551 12.4406C33.5967 7.38815 41.8581 5.57793 50.0178 7.34356C50.4976 7.4473 50.9805 7.56429 51.4529 7.69087C58.9992 9.71289 65.3437 14.5299 69.3178 21.2546C70.0355 22.4693 70.6619 23.722 71.1947 25.0033C72.2971 24.1601 73.4658 23.3882 74.695 22.6949C81.4985 18.8585 89.4019 17.8593 96.9484 19.8813C97.4208 20.0079 97.8976 20.1483 98.3649 20.2981C106.314 22.8489 112.564 28.5474 115.963 36.3442C119.632 44.7625 119.462 54.4481 115.494 62.9174C110.386 73.82 100.284 82.906 85.4669 89.9225C74.0774 95.3159 62.7933 98.0861 57.0804 99.2571C55.1901 99.6446 53.2066 99.5855 51.3444 99.0865V99.0865Z" fill="url(#paint0_linear_124_82)"/>
                <path d="M115.963 36.344C114.689 33.4214 113.014 30.7939 111 28.5162C113.692 36.3533 113.22 45.047 109.617 52.7379C104.51 63.6405 94.4069 72.7265 79.5901 79.743C68.2005 85.1364 56.9165 87.9066 51.2036 89.0776C49.3132 89.4651 47.3297 89.4062 45.4674 88.9073C43.6052 88.4083 41.858 87.4675 40.4149 86.1868C36.0535 82.3164 27.6657 74.2756 20.4987 63.9096C20.1916 63.4655 19.891 63.0221 19.5949 62.5792C21.4291 66.3632 23.6885 70.2024 26.3757 74.0889C33.5428 84.4549 41.9305 92.4957 46.2919 96.3661C47.7352 97.6469 49.4824 98.5876 51.3445 99.0866C53.2067 99.5856 55.1902 99.6446 57.0804 99.2569C62.7933 98.0859 74.0774 95.3157 85.4669 89.9223C100.284 82.9058 110.386 73.8198 115.494 62.9172C119.462 54.4479 119.633 44.7624 115.963 36.344V36.344Z" fill="url(#paint1_linear_124_82)"/>
                <path d="M98.3648 20.2981C97.8974 20.1483 97.4207 20.0079 96.9483 19.8813C89.4018 17.8593 81.4986 18.8586 74.6949 22.6951C73.4659 23.3882 72.2973 24.16 71.1951 25.0032L51.3445 99.0866C53.2068 99.5856 55.1902 99.6447 57.0804 99.2569C62.7933 98.0859 74.0774 95.3157 85.4669 89.9223C100.284 82.9058 110.386 73.8198 115.494 62.9172C119.461 54.4479 119.632 44.7623 115.963 36.344C112.564 28.5474 106.314 22.8489 98.3648 20.2981V20.2981Z" fill="url(#paint2_linear_124_82)"/>
                <defs>
                <linearGradient id="paint0_linear_124_82" x1="60.1874" y1="32.2281" x2="84.0552" y2="86.6221" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7044"/>
                <stop offset="1" stopColor="#F82814"/>
                </linearGradient>
                <linearGradient id="paint1_linear_124_82" x1="71.9786" y1="70.6195" x2="78.3252" y2="106.342" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F82814" stopOpacity="0"/>
                <stop offset="1" stopColor="#C0272D"/>
                </linearGradient>
                <linearGradient id="paint2_linear_124_82" x1="73.6407" y1="49.8112" x2="39.3289" y2="-10.974" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F82814" stopOpacity="0"/>
                <stop offset="1" stopColor="#C0272D"/>
                </linearGradient>
                </defs>
                </svg>

            )
            case "news":  
            return(
                <svg className="news" width="109" height="101"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.9857 0.89671L23.4083 17.3963C21.9792 17.7792 21.1575 19.2025 21.5404 20.6316L38.6325 84.4203C39.3846 87.227 37.7037 90.1387 34.8968 90.8908C33.4678 91.2737 32.646 92.697 33.0289 94.126C33.2204 94.8404 30.1185 96.3279 27.0127 97.5975C28.3879 97.8308 29.7831 97.7305 31.1611 97.3612L95.29 80.1779C102.332 78.291 106.516 71.044 104.629 64.0018L88.2209 2.76457C87.838 1.33554 86.4147 0.5138 84.9857 0.89671Z" fill="url(#paint0_linear_124_76)"/>
                <path d="M16.6693 73.8969C15.2602 74.2745 14.4239 75.723 14.8014 77.1321L18.2199 89.8899C19.3411 94.0744 22.9281 97.0511 26.9614 97.6113C27.0261 97.6486 27.0124 97.5976 27.0124 97.5976C28.3049 97.817 29.6152 97.7414 30.9124 97.425C36.6946 96.014 40.0288 89.6324 38.4883 83.8832L34.5301 69.1111L16.6693 73.8969ZM42.1717 56.1246L62.5841 50.6551C63.9944 50.2772 64.8299 48.8302 64.452 47.4199L58.9825 27.0075C58.6046 25.5971 57.1576 24.7617 55.7472 25.1396L35.3348 30.6091C33.9245 30.987 33.0891 32.434 33.467 33.8443L38.9365 54.2567C39.3144 55.667 40.7614 56.5025 42.1717 56.1246ZM67.4909 27.4624L82.8002 23.3603C84.2105 22.9824 85.046 21.5353 84.6681 20.125C84.2902 18.7147 82.8432 17.8793 81.4328 18.2572L66.1235 22.3593C64.7132 22.7372 63.8778 24.1842 64.2557 25.5945C64.6336 27.0048 66.0806 27.8403 67.4909 27.4624ZM84.1676 28.4634L68.8583 32.5655C67.448 32.9434 66.6125 34.3904 66.9904 35.8007C67.3683 37.211 68.8153 38.0465 70.2257 37.6686L85.535 33.5665C86.9453 33.1886 87.7807 31.7415 87.4028 30.3312C87.0249 28.9209 85.5779 28.0855 84.1676 28.4634ZM86.9023 38.6696L71.593 42.7717C70.1827 43.1496 69.3473 44.5966 69.7252 46.0069C70.1031 47.4172 71.5501 48.2527 72.9604 47.8748L88.2697 43.7727C89.68 43.3948 90.5155 41.9477 90.1376 40.5374C89.7597 39.1271 88.3127 38.2917 86.9023 38.6696ZM89.6371 48.8758L43.5391 61.2277C42.1287 61.6056 41.2933 63.0526 41.6712 64.4629C42.0491 65.8732 43.4961 66.7087 44.9064 66.3308L91.0044 53.9789C92.4148 53.601 93.2502 52.1539 92.8723 50.7436C92.4944 49.3333 91.0474 48.4979 89.6371 48.8758ZM92.3718 59.082L46.2738 71.4339C44.8635 71.8118 44.0281 73.2588 44.406 74.6691C44.7838 76.0794 46.2309 76.9149 47.6412 76.537L93.7392 64.1851C95.1495 63.8072 95.9849 62.3601 95.6071 60.9498C95.2292 59.5395 93.7821 58.7041 92.3718 59.082Z" fill="url(#paint1_linear_124_76)"/>
                <defs>
                <linearGradient id="paint0_linear_124_76" x1="67.6397" y1="87.5868" x2="47.1292" y2="11.0403" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5558FF"/>
                <stop offset="1" stopColor="#00C0FF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_124_76" x1="60.6736" y1="89.453" x2="44.2653" y2="28.2162" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ADDCFF"/>
                <stop offset="0.5028" stopColor="#EAF6FF"/>
                <stop offset="1" stopColor="#EAF6FF"/>
                </linearGradient>
                </defs>
                </svg>

            )
    }

    
    
}

export default Items;