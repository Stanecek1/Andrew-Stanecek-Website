import React, { useEffect, useState } from 'react';
import background from '../../../Shared/Images/Banner1.png'


//alignes the photos in colums with the newest on the top
const SoftwareCard = (props) => {    
    
    return(
        <div className="container-fluid border-bottom p-5 mb-5">
            <div className="card border-0">
                <div className="card-body text-center" >
                    <h5 className="card-title mx-auto">{props.data.title}</h5> 
                    <p className='card-text'>{props.data.body}</p>
                </div>
                <img className="card-img" src={props.data.src}  ></img>
            </div>
        </div>
    );
}

export default SoftwareCard;