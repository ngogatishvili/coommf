import React from 'react'
import {Button, Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import { Rating } from './Rating'

export const Product = ({product}) => {
  return (
    <div className="product mb-3">
        <Card>
        <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top"/>
        </Link>
        <Link to={`/products/${product.slug}`}>
        <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews}/>
        <Card.Text>$ {product.price}</Card.Text>
        <Button>Add to Cart</Button>
        
        
    </Card>
    </div>
    
  )
}
