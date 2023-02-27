import React,{useState} from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const Carousel = ({slider}) => {

    const[current,setCurrent] = useState(0)
   
    const prevslide = () =>{
        console.log('prevslide', current);
        setCurrent(current === slider.length-1 ? 0 :current-1)
    }
    const nxtslide = () =>{
        console.log('nxtslide', current);
        setCurrent(current === 0 ? slider.length-1 :current+1)
    }
 
    return (  
        <div className='carouselcontainer' >
            <div className='corouseltext'>
                <h6>What Do We Do ?</h6>
                <p>Details of Events / things we do</p>
            </div>
            <div className='carouselpictures' >
            <FaArrowAltCircleRight onClick={nxtslide} className="arrow right"/>
            <FaArrowAltCircleLeft onClick={prevslide} className="arrow left"/>
            {slider.map((source,index) => (
                <div key={index} className={index === current ? 'slide active' : 'slide'}>
                    {(index) === setCurrent & (<img src={source} alt={index+1} className="pictures_carousel" />)}
                </div>
            ))}
            </div>
        </div>

  );
}

export default Carousel;
