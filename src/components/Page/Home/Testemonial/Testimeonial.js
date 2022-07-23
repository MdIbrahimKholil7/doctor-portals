import React from 'react';
import quote from '../../../../img/icons/quote.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import people1 from '../../../../img/images/people1.png'
import people2 from '../../../../img/images/people2.png'
import people3 from '../../../../img/images/people3.png'
import './Testomonial.css'
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    let settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        /* mobileFirst: true, */
        responsive: [
            
                {
                breakpoint:1024,
                settings:{
                    slidesToShow:3,
                    slidesToScroll: 1,
                }
            },
                {
                breakpoint:968,
                settings:{
                    slidesToShow:2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
   
    const testimonial = [
        {
            id: 1,
            name: 'Winson Herry',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: `${people1}`
        },
        {
            id: 2,
            name: 'Winson Herry',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: `${people2}`
        },
        {
            id: 3,
            name: 'Winson Herry',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: `${people3}`
        },
        {
            id: 4,
            name: 'Winson Herry',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: `${people1}`
        },
        {
            id: 5,
            name: 'Winson Herry',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: `${people3}`
        },
    ]
    return (
        <div className='px-4 mt-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-xl text-primary font-bold'>Testimonial</h1>
                    <h2 className='text-4xl font-bold'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>

            <div className='mt-20 w-[94%] mx-auto'>

                <Slider {...settings}
                autoplay={true}
                >
                    {
                        testimonial.map(elem => <TestimonialCard
                        key={elem.id}
                        elem={elem}
                        />)
                    }
                </Slider>

            </div>

        </div>
    );
};

export default Testimonial;