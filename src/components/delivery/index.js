import React from 'react'
import "./delivery.css"
import Filters from '../common/filters'
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../common/exploreSection';
import { restaurants } from '../../data/restaurants';
const deliveryFilters=[
  {
    id:1,
    icon:<i className="fi fi-rr-settings-sliders"></i>,
    title:'Filters'
  },
  {
    id:2,
    title:'Rating:4.0+'
  },
  {
    id:3,
    title:'Pure veg'
  },
  {
    id:4,
    title:'Cuisines',
    icon:<i className="fi fi-rr-angle-small-down"></i>,
  },


];
const restaurantList=restaurants;
const Delivery = () => {

  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list={restaurantList} collectionName='Delivery Restaurants in Kolkata'/>
    </div>
  )
}

export default Delivery

