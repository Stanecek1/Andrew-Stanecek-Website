
import React from 'react';
import '../../App.css';
import Banner from "../../Shared/Banner"
import SoftwareCard from './Components/SoftwareCard';

class Software extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <Banner title="Software" />
                <div>
                    <SoftwareCard/>
                </div>
            </div>
        );
    }
}

export default Software;