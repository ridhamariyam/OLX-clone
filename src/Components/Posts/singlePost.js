import React from 'react'
import './Post.css'
import Heart from '../../assets/Heart'

function singlePost(props) {
  return (
    <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={props.product.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {props.product.price}</p>
              <span className="kilometer">{props.product.category}</span>
              <p className="name"> {props.product.name}</p>
            </div>
            <div className="date">
              <span>{props.product.createdAt}</span>
            </div>
          </div>
  )
}

export default singlePost