import React from "react";
import "./nightcollection.css";
import Slider from "react-slick";
import NextArrow from "../carousel/nextArrow";
import PrevArrow from "../carousel/prevArrow";
import NightCollectionItem from "./nightcollectionItem";

const nightcollectionItems=[
    {
        id:1,
        title:"8 places for Okto-Beer Fest",
        cover:"https://b.zmtcdn.com/data/collections/8e0dc0e7082aaa11e0731a79287d0def_1694789078.png",
        places:"8 places",
      },
      {
        id:2,
        title:"23 Best Bars & Pubs",
        cover:"https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675232844.jpg",
        places:"23 places"
      },
    ]
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const NightCollection = () => {
  return (
    
   <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title"> Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Kolkata, based on trends
          </div>
          <div className="collection-location">
            <div>All collections in kolkata</div>
            <i className="fi fi-rr-caret-right absolute-center"></i>
          </div>
        </div>
        
        <Slider {...settings}>
          {nightcollectionItems.map((item) => {
            return <NightCollectionItem item={item}/>
          }
          )}
        
          
        </Slider>
        
      </div>
    </div>
  );
};

export default NightCollection;
