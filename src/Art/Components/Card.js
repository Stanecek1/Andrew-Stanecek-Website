import React, { Component } from 'react';

class Card extends Component {

render() {
    const image = this.props.image;
    const title = this.props.title;
    const order = this.props.order;
    const color = this.props.color;

    if (order == 1)
    {
        return (
            <div className="container-fluid">
                <div className="card border-0">
                    <div className="row ">
                        <div className="col-xs-5 col-sm-4 col-md-4 col-lg-4 p-0">
                            <img src={image} className="card-img"></img>
                        </div>
                        <div className="card-body col-xs-7 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center" style={{"background-color" : color}}>
                            <h5 className="card-title mx-auto black-drop-shadow">{title}</h5> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="container-fluid">
                <div className="card border-0">
                    <div className="row " >
                        <div className="card-body col-xs-7 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center "  style={{"background-color" : color}} >
                            <h5 className="card-title mx-auto red-drop-shadow">{title}</h5> 
                        </div>
                        <div className="col-xs-5 col-sm-4 col-md-4 col-lg-4 p-0" >
                            <img src={image} className="card-img"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
}

export default Card;