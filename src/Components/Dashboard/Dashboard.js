import React, { Component } from 'react';
import "../../home.css";
import Navbar from '../Navbar/navbar';
import ProductCard from '../Productcard/ProductCard';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="featured">
      <ProductCard />
      <ProductCard />
      <ProductCard />         
      </div>
      </div>
    )
  }
}
