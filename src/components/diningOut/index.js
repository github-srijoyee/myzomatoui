import React from 'react'
import "./diningOut.css"
import Collection from '../common/collection'
import { diningOut } from '../../data/diningOut';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';


const diningFilters=[
  {
    id:1,
    icon:<i className="fi fi-rr-settings-sliders"></i>,
    title:'Filters'
  },
  {
    id:2,
    icon:<i className="fi fi-rr-crown"></i>,
    title:'Gold'
  },
  {
    id:3,
    title:'Rating:4.0+'
  },
  {
    id:4,
    title:'Outdoor Seating'
  },
  {
    id:5,
    title:'Serves alcohol'
  },
  {
    id:6,
    title:'Open now',
    },

];

const diningList=diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection/>
      <div className='max-width'>
        <Filters filterList={diningFilters}/>
      </div>
      <div>
        <img className="offer-image max-width absolute-center" src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"/>
      </div>
      <ExploreSection list={diningList} collectionName="Trending Dining Restaurants in Kolkata"/>
    </div>
  );
};

export default DiningOut;
