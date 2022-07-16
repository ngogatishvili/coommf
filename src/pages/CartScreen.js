import React, { useContext } from 'react'
import { Col, ListGroup, ListGroupItem, Row,Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Message } from '../components/Message';
import { Store } from '../Store'


export const CartScreen = () => {
    const {state,dispatch:cxtDispatch}=useContext(Store);
    const {cart:{cartItems}}=state;
  return (
    <div>
        <h1>Shopping cart</h1>
        <Row>
            <Col md={8}>
                {cartItems.length===0? <div>
                    <Message>Cart is empty</Message>
                    <Link to="/">go to shopping</Link>
                </div> :(
                   <ListGroup>
                    {cartItems.map(item=>(
                        <ListGroupItem key={item._id}>
                            <Row className="align-items=center">
                                <Col md={4}>
                                    <img src={item.image} alt={item.name} className="img-fluid rounded img-thumbnail"/>
                                    <Link to={`/products/${item.slug}`}>{item.name}</Link>
                                </Col>
                                <Col md={3}>
                                    <Button variant="light" disabled={item.quantity===1}>
                                        <i className="fas fa-minus-circle"></i>
                                    </Button> {` `}
                                    <span>{item.quantity}</span>{' '}
                                    <Button variant="light" disabled={item.quantity=item.countInStock}>
                                        <i className="fas fa-plus-circle"></i>
                                    </Button>
                                </Col>
                                <Col md={3}>
                                    $ {item.price}
                                </Col>
                                <Col md={2}>
                                    <Button>
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))}
                   </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup>
                        <ListGroupItem>
                            <h3>Subtotal ({cartItems.reduce((a,c)=>a+c.quantity,0)})</h3>
                            {console.log(cartItems)}
                        </ListGroupItem>
                    </ListGroup>
                    <ListGroupItem>
                        <Button type="button" disabled={cartItems.length===0} variant="primary">Proceed to checkout</Button>
                    </ListGroupItem>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

