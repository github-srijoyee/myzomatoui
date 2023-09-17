import React from 'react'
import "./nightcollectionItem.css"

const NightCollectionItem = ({item}) => {
  return (
    
      <div>
       <div className="collection-cover">
              <img
                src={item.cover}
                className="collection-image"
                alt={item.title}
              />
              <div className="gradient-bg"></div>
              <div className="collection-card-title">{item.title}</div>
              <div className="collection-card-subtitle">
                <div>{item.places}</div>
                <i className="fi fi-rr-caret-right absolute-center"></i>
              </div>
            </div>
    </div>
    
  )
}

export default NightCollectionItem

