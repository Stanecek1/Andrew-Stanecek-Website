import React from 'react';
import Banner1 from "./Images/Banner1.png"

class Banner extends React.Component {
    constructor(props){
        super(props);

    }
    title = this.props.title;
    
    render() {
        return (
            <div className="banner-container"
                style={{
                    backgroundImage: `url(${Banner1})`,
                    backgroundSize: "cover",
                    height: "10vw",
                    color: "#f5f5f5"
                }}>
                    <div className='banner-content'>
                    <h1>{this.title}</h1>
                    </div>     
            </div>
        );
    }
}

export default Banner;