import React, { useEffect, useState } from 'react';
import { ImgOverlay } from 'image-overlay-react'

//alignes the photos in colums with the newest on the top
const Columns = (props) => {    
    let rows = [];
    let columns = [];
    let t = 0;
    console.log("images: " + props.images)
    props.images.forEach(function(i, idx, array){
        console.log(i);
        if (t == 3){
            t = 0;
            //add columns to rows
            columns.push(rows);
            rows = [];
        }
        if (idx === array.length -1){
            let photo = {title: i.title, src: i.src}
            rows.push(photo);
            columns.push(rows);
        }
        else {
            let photo = {title: i.title, src: i.src}
            rows.push(photo);
            t++;
        }
    })
    //holds the rows
    let horizontal = [];
    for (let i = 0; i < 3; i++){
        //holds the columns
        let vertical = [];
        for (let j = 0; j < columns.length; j++) {
            if (columns[j][i] != undefined){
                vertical.push(
                    <div>
                        <ImgOverlay
                            imgSrc={ columns[j][i].src}
                            bgColor='rgba(52, 52, 52, 0.8)'
                            position='right'
                            width='100%'
                            height='100%'
                            opcaity="50%"
                            fSize='48px'
                            fColor="white"
                            >
                            { columns[j][i].title}
                        </ImgOverlay>
                    </div>
                )
            }
        }
        horizontal.push(vertical);
    }
    return (
        <div className='row'>
            <div className='col-4 p-0'>
                {horizontal[0]}
            </div>
            <div className='col-4 p-0'>
                {horizontal[1]}
            </div>
            <div className='col-4 p-0'>
                {horizontal[2]}
            </div>
        </div>
    );
}

export default Columns;