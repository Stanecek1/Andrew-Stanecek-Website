import React, { useEffect, useState } from 'react';
import { ImgOverlay } from 'image-overlay-react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//alignes the photos in colums with the newest on the top
const Columns = (props) => {    
    const [index,setIndex]=useState(0);
    const [modalOpen,setModalOpen]=useState(false);

    let rows = [];
    let columns = [];
    let t = 0;
    //console.log("images: " + props.images)
    props.images.forEach(function(i, idx, array){
        if (t == 4){
            t = 0;
            //add columns to rows
            columns.push(rows);
            rows = [];
        }
        if (idx === array.length -1){
            let photo = {title: i.title, src: i.src, index: idx}
            rows.push(photo);
            columns.push(rows);
        }
        else {
            let photo = {title: i.title, src: i.src, index: idx}
            rows.push(photo);
            t++;
        }
    })
    //holds the rows
    let horizontal = [];
    for (let i = 0; i < 4; i++){
        //holds the columns
        let vertical = [];
        for (let j = 0; j < columns.length; j++) {
            if (columns[j][i] != undefined){
                vertical.push(
                    // div onClick funtion allows users to click image and expand
                    //ImgOverlay allows the use of title for onHover
                    <div onClick={() => { setModalOpen(true); setIndex(columns[j][i].index); }} className='imgOverlay'>
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
                            {columns[j][i].title} 
                        </ImgOverlay>
                    </div>
                )
            }
        }
        horizontal.push(vertical);
    }
    return (
        <div>
            <div className='row'>
                <div className='col-3 p-0'>
                    {horizontal[0]}
                </div>
                <div className='col-3 p-0'>
                    {horizontal[1]}
                </div>
                <div className='col-3 p-0'>
                    {horizontal[2]}
                </div>
                <div className='col-3 p-0'>
                    {horizontal[3]}
                </div>
            </div>
            <div>
                {modalOpen && <Lightbox
                    imageTitle={props.images[index].title}
                    onCloseRequest={() => setModalOpen(false)}
                    mainSrc={props.images[index].src}
                    nextSrc={props.images[index + 1 == props.images.length ? 0 : index + 1].src}
                    prevSrc={props.images[index - 1 == -1 ? props.images.length -1 : index - 1].src}
                    onMovePrevRequest={() => setIndex(index - 1 == -1 ? props.images.length -1 : index - 1)}
                    onMoveNextRequest={() => setIndex(index + 1 == props.images.length ? 0 : index + 1)}
                />}
            </div>
        </div>
    );
}

export default Columns;