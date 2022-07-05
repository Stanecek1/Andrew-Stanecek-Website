import React, { useEffect, useState } from 'react';
import background from '../../../Shared/Images/Banner1.png'
import Diagram from '../../../Shared/Images/Diagram1.png';


//alignes the photos in colums with the newest on the top
const SoftwareCard = (props) => {    


    return(
        <div className="container-fluid">
            <div className="card border-0">
                <div className="card-body text-center" >
                    <h5 className="card-title mx-auto">This Website</h5> 
                    <h className='card-text'> This website was developed using Node.JS, React, Express, AWS, and Javascript</h>
                </div>
                <img className="card-img" src={Diagram}  ></img>
            </div>
        </div>
    );

}

export default SoftwareCard;