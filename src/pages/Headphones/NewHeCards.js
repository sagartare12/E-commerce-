import React , { useState , useEffect } from 'react'
import {Card, Button, H4} from 'react-bootstrap'
import { ButtonToolbar } from 'rsuite';
import { useProduct } from '../../context/products';
import {Nav , Sidenav ,Icon} from 'rsuite'
import { Link, Redirect, Switch ,Route } from 'react-router-dom';
import Home from '../Home';
const PAGE_PRODUCTS = 'items';
const PAGE_CART = 'cart';
const PAGE_FILTER = 'filter';
export const NewHeCards = ({thumbnail}) => {
     const [ cart , setCart] = useState([]);
     const [ page , setPage] = useState(PAGE_PRODUCTS);
     const [fil , setFil] = useState([]);
     const {data} = useProduct();
     const [ key ,setKey ] = (

        [data.filter(item => item.categoryId === "xasgy42fa")]
     )

   console.log('v',key)
    
const addToCart =(item) =>{
         setCart([...cart, {...item}])
}

const navigateToCart =(nextPage) =>{
             setPage(nextPage);
             console.log(page)
}

const navigateToProduct = (net) =>{
             setPage(net);
}

       
          
const removeToCart = (removeItem) =>{
    setCart(
        cart.filter((remove) => remove !== removeItem))
}


const delivery =(toFIlt) => {
    const filt = key.filter(item=> item.delivery === true);
   setFil(filt);
   setPage(toFIlt); 
}


console.log('page',fil)
const renderItems =() =>{
         return (
  <div className="grid">
        {key.map((item)=>(
            <div    style={{ marginBottom: '3rem' }}>
                    <Card   style={{ width: '18rem' }}>                              
                        <Card.Img   style={{ width: 'auto' , height:'15rem' }} variant="top" src={item.thumbnail} />
                        <Card.Body className="center " >
                            <Card.Title>{item.name}</Card.Title>
                            <h5 className="font">{item.price} {item.currency}</h5>
                            <Button   onClick={()=> addToCart(item)} variant="warning">Add to Cart</Button>
                        </Card.Body>
                    </Card>
            </div>
        ))}
                    
</div>
         )}

 
const renderCart = () =>{
    return (
        <div className="grid">
                {cart.map((item)=>(
                    <div    style={{ marginBottom: '3rem' }}>
                    
                            <Card   style={{ width: '18rem' }}>                              
                                <Card.Img   style={{ width: 'auto' , height:'15rem' }} variant="top" src={item.thumbnail} />
                                <Card.Body className="center " >
                                    <Card.Title>{item.name}</Card.Title>
                                    <h5 className="font">{item.price} {item.currency}</h5>
                                    <Button   onClick={()=> removeToCart(item)} variant="info">Remove</Button>
                                </Card.Body>                            
                            </Card>                           
                    </div>
                    ))}                           
        </div>
             )
         }

        //  console.log('g',filt);

const renderFilter =()=>{
    return(
        <div className="grid">
            {fil.map(item=>
                <div    style={{ marginBottom: '3rem' }}>
                
                        <Card   style={{ width: '18rem' }}>                              
                            <Card.Img   style={{ width: 'auto' , height:'15rem' }} variant="top" src={item.thumbnail} />
                            <Card.Body className="center " >
                                <Card.Title>{item.name}</Card.Title>
                                <h5 className="font">{item.price} {item.currency}</h5>
                                <Button   onClick={()=> addToCart(item)} variant="info">AddTo Cart</Button>
                            </Card.Body>                      
                        </Card>                       
                </div>                      
            )}
        </div>
           )
         }
        
    return (
        <div>
       
        <div className="ce">
            <button  onClick={()=>navigateToCart(PAGE_CART)}>Cart {cart.length}</button> 
            <button onClick={()=>navigateToProduct(PAGE_PRODUCTS)}>Products</button>
        </div>
            <div className="flex">       
                <div style={{ width: "200px" ,marginTop:"50px"}}>
                    <Sidenav activeKey="1">
                    <Sidenav.Body>
                        <Nav>                                                                       
                        <Nav.Item  eventKey="2" icon={<Icon icon="home" />}>
                            Home
                        </Nav.Item>
                        <Nav.Item onClick={()=>delivery(PAGE_FILTER)} eventKey="2" icon={<Icon icon="group" />}>
                            Delivery
                        </Nav.Item>                                          
                        </Nav>
                    </Sidenav.Body>
                    </Sidenav>
                </div>
                <div>
                        {page === PAGE_PRODUCTS && renderItems()}
                        {page === PAGE_CART && renderCart()}
                        {page ===PAGE_FILTER && fil !== 0 && renderFilter()}
                        
                </div>
            </div>     
</div>

    )
}
