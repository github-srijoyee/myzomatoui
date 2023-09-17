import React from "react";
import "./collection.css";
import Slider from "react-slick";
import NextArrow from "../carousel/nextArrow";
import PrevArrow from "../carousel/prevArrow";
import CollectionItem from "./collectionItem";

const collectionItems=[
  {
    id:1,
    title:"8 places for Okto-Beer Fest",
    cover:"https://b.zmtcdn.com/data/collections/8e0dc0e7082aaa11e0731a79287d0def_1694789078.png",
    places:"8 places",
  },
  {
    id:2,
    title:"18 Live Cricket Screenings",
    cover:"https://b.zmtcdn.com/data/collections/182bf3bd341928143d739a6859090ee7_1694785257.jpg",
    places:"18 places",
  },
  {
    id:3,
    title:"11 Best Insta-worthy places",
    cover:"https://b.zmtcdn.com/data/collections/fbe01413b99e6a071af5211d569e7ab6_1691566538.jpeg",
    places:"10 places",
  },
  {
    id:4,
    title:"9 Newly opened restaurants",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1675231247.jpg",
    places:"8 places",
  },
  {
    id:5,
    title:"15 Ultimate Vegetarian Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/21650cff91a2be578aca3a09325fe694_1690789343.png",
    places:"12 places",
  },
  {
    id:6,
    title:"11 Blissful Breakfast Places",
    cover:"https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054191.jpg",
    places:"11 places",
  },
  {
    id:7,
    title:"Winners of Zomato Restaurant Awards",
    cover:"https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places:"11 places",
  },
  {
    id:8,
    title:"12 Great Buffets",
    cover:"https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675231457.jpg",
    places:"12 places",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Collection = () => {
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
          {collectionItems.map((item) => {
            return <CollectionItem item={item}/>
          }
          )}
        
          
        </Slider>
        
      </div>
    </div>
  );
};

export default Collection;
