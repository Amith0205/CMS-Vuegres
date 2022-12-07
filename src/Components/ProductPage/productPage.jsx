import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Chat from "../ChatBox/Chat";
import "../Product/Product.css";
import Carousel from 'react-bootstrap/Carousel';

export default class ProductPage extends Component {
    
  render() {
    return (      
        <>
        <Carousel style={{minWidth:"100vw",minHeight:"90vh",marginLeft:"-120px"}} variant="dark">
        {this.props.products.map((product,index)=>{
               return <Carousel.Item>  
               <div style={{display:"flex",justifyContent:"space-around",minWidth:"100vw",minHeight:"90vh"}}>
                <div className="picture">
                    <div className="author">
                        <p className="content--author">
                        {
                            product.company
                        }
                        </p>

                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p className="version">
                        Version {
                        product.version
                    } </p>
                    {
                    product.status ? (
                        <>{
                            product.approved ? <p className="status">Approved</p> : <p className="status">Declined</p>
                        }</>
                    ) : (
                        <div style={{display:"flex"}}>
                            <Button variant="primary" size="sm" onClick={this.handleChange}>
                                Accept 
                            </Button>
                            <Button variant="secondary" size="sm" onClick={this.handleChange}>
                                Decline
                            </Button>
                        </div>
                    )
                }
                </div>

                    <img src={
                            (`${
                                product.AdImage
                            }`)
                        }
                        alt="graphics"
                        className="img"/>
                        
                    <div style={
                        {
                            display: "flex",
                            justifyContent: "space-between"
                        }
                    }>
                        <i className="content--text">
                            {
                            product.tagline
                        }
                        </i>

                    </div>

                </div>

                <Chat index={index}/>
                </div>
                </Carousel.Item>

        })}  
        </Carousel>      
       </> 
      
    )
  }
}
