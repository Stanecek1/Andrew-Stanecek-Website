import React, { useEffect, useState } from 'react';
import background from '../../../Shared/Images/Banner1.png'


//alignes the photos in colums with the newest on the top
const SoftwareCard = (props) => {    


    return(
        <div className="container-fluid">
                <div className="card border-0">
                    <img  className="card-img" /*src={background} */ ></img>
                    <div className="card-body text-center" >
                    <h5 className="card-title mx-auto black-drop-shadow">Test</h5> 
                            <a className='card-text'> hellow workd</a>
                    </div>
                </div>
            </div>
    );

}

export default SoftwareCard;