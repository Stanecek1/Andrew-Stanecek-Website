
import '../../App.css';
import React, { useState, useEffect, useCallback } from 'react';
import 'react-image-lightbox/style.css';
import Sunflower from '../../Shared/Images/Sunflower.png';
import Sunflower2 from '../../Shared/Images/Sunflower2.png';

function Home() { 
    
    const [sunflower,setSunflower]=useState(Sunflower);

    //toggles the image being presented
    function toggle () {
        let value = sunflower==Sunflower ? Sunflower2 : Sunflower;
        setSunflower(value);
        }

    return (
        <div className='HomeBackground'>
            <div className= "d-flex justify-content-end">
                <img className='sunflower' src={sunflower} onMouseEnter={() => toggle()} onMouseLeave={() => toggle()}></img>
            </div>
        </div>
    );
}

export default Home;