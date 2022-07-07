import '../../App.css';
import Banner from "../../Shared/Banner"
import SoftwareCard from './Components/SoftwareCard';
import {getSoftwareData} from '../../Art/Client';
import React, { useState, useEffect, useCallback } from 'react';

function Software () {
    const [softwareList,setSoftwareList]=useState([]);
    console.log("first");
    useEffect(() => {
        getSoftwareData().then(res => {

            setSoftwareList(res);
            console.log(res);
        });
    }, []);


    return (
        <div>
            <Banner title="Software" />
            <div>
            {softwareList.map(function(object, i){
                return <SoftwareCard data={object} />;
            })}
                {/* <SoftwareCard data={softwareList[0]}/>
                <SoftwareCard data={softwareList[1]}/> */}
            </div>
        </div>
    );
    
}

export default Software;