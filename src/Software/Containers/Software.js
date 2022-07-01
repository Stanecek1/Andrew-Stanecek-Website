
import React from 'react';
import '../../App.css';
import Banner from "../../Shared/Banner"

class Software extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <Banner title="Software" />
            </div>
        );
    }
}

export default Software;