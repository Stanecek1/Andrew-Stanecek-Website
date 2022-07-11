import '../../App.css';
import Banner from "../../Shared/Banner"
import SoftwareCard from './Components/SoftwareCard';
import {getSoftwareData} from '../../Art/Client';
import React, { useState, useEffect } from 'react';

function Software () {
    const [softwareList,setSoftwareList]=useState([]);

    useEffect(() => {
        getSoftwareData().then(res => {
            setSoftwareList(res);
        });
    }, []);

    return (
        <div>
            <Banner title="Software" />
            <div>
            {softwareList.map(function(object, i){
                return <SoftwareCard data={object} />;
            })}
            </div>
        </div>
    );
    
}

export default Software;