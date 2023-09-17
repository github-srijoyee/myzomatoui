import React from 'react'
import "./nightlife.css"
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
import {nightlife} from '../../data/nightlife';
import NightCollection from '../common/nightcollection';

const nightFilters=[
  {
    id:1,
    icon:<i className="fi fi-rr-settings-sliders"></i>,
    title:'Filters'
  },
  {
    id:2,
    icon:<i className="fi fi-rr-crown"></i>,
    title:'Pro-offers'
  },
  {
    id:3,
    icon:<i class="fi fi-rr-apps-sort absolute-center"></i>,
    title:'Distance',
  },
    
  {
    id:4,
    title:'Rating:4.0+'
  },
  
  {
    id:5,
    title:'Pubs and Bars'
  },

  
];

const nightList=nightlife;
const Nightlife = () => {
  return (
    <div>
      <NightCollection/>
      <div className='max-width'>
        <Filters filterList={nightFilters}/>
      </div>
      <div>
        <img className="offer-image max-width absolute-center" src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"/>
      </div>
      <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Kolkata"/>
    </div>
  )
}

export default Nightlife
