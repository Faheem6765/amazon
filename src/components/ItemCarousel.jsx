import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import images from "./Images";
import "../css/item-carousel.css";
import p6 from '../images/p6.jpg'
import p7 from '../images/p7.jpg'
import p8 from '../images/p8.jpg'

export default (props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    // const [image, setImage] = useState(images);
    const chevronWidth = 40;

    // const getImages = () => {
    //     props.passImages;
    // }

    return (
        <div className="main-div">
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={5}
                gutter={20}
                leftChevron={<button className="arrow-btn left-btn">{'<'}</button>}
                rightChevron={<button className="arrow-btn right-btn">{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >

                {props.passImages}




            </ItemsCarousel>
        </div >

    );
};