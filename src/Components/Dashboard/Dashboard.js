import React, {Component} from 'react';
import "../../home.css";
import ProductCard from '../Productcard/ProductCard';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="featured">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
    
                </div>
            </div>
        )
    }
}
