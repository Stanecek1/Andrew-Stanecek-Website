
import $ from 'jquery';
import fileToRead from "./Data/ArtData.json"
var data = require('./Data/ArtData.json');
class ImageManager{
    constructor(){
    }

    getData(){
        
        return data.art;
    }
}

    




export default ImageManager;