import React from 'react'
import "./topBrands.css"
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topbrandList=[
    {
        id:1,
        title:"Chowman",
        time:"33 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6799a847a4bfaee73f5e14aaba8cef83_1638193272.png"
    },
    {
        id:2,
        title:"Arsalan",
        time:"46 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png"
    },
    {
        id:3,
        title:"KFC",
        time:"30 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png"
    },
    {
        id:4,
        title:"Gupta Brothers",
        time:"32 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/a2531dc570196c0cd9322814eb010d94_1605102324.png"
    },
    {
        id:5,
        title:"Wow! Momo",
        time:"24 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389253.png"
    },
    {
        id:6,
        title:"Burger King",
        time:"57 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188103.png"
    },
    {
        id:7,
        title:"Pizza Hut",
        time:"40 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id:8,
        title:"Kasturi Restaurant",
        time:"53 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/94e8d80f54135ba39669774c68e9ecff_1567764102.png"
    },
    {
        id:9,
        title:"Mio Amore",
        time:"24 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f9eef3c0e4df808bd5590eefdf5c9c1d_1677580200.png"
    },
    {
        id:10,
        title:"Kwality Wall’s Frozen Dessert and Ice Cream Shop",
        time:"16 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0619ae0b489d44dd3562538f7768e48a_1658824977.png"
    }

];
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow/> ,
    prevArrow: <PrevArrow/>,
  };
const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top brands for you</div>
      <Slider {...settings}>
        {topbrandList.map((brand)=>{
            return <div>
                <div className='top-brands-cover'>
                    <img src={brand.cover} className='top-brands-image' alt={brand.time}/>
                    <div className='brand-title absolute-center'>{brand.title}</div>
                    <div className='brand-time absolute-center'>{brand.time}</div>
                    
                </div>
            </div>
        })}
      </Slider>
    </div>
  )
}

export default TopBrands

