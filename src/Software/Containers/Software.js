
import React from 'react';
import '../../App.css';

class Software extends React.Component {
    constructor(props){
        super(props);
        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit = async (e) =>{
        e.preventDefault();
        const file = this.fileInput.current.files[0]

        //get secure ulr from server

        const url = await fetch("http://localhost:8080/s3Url");
        console.log(url);

        //post the image directly tot he s3 bucket
        fetch(url.url, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: file
        })

        

        const imageUrl = url.url.split('?')[0]
        console.log(imageUrl);

        //post request to my server  to store any extra data
    }
    render() {
        return (
            <div>
                <h1>Software </h1>
                <form id='imageFrom' onSubmit={this.handleSubmit}>
                    <input id='imageInput' type="file" accept='image/*' ref={this.fileInput}></input>
                    <button type="submit">upload</button>
                </form>
            </div>
        );
    }
}

export default Software;