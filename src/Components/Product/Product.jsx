import "./Product.css";
import React from 'react';
import Chat from "../ChatBox/Chat";
import Button from 'react-bootstrap/Button';
import {
    collection,
    getDocs,
} from 'firebase/firestore';
import { app, database } from '../../index';
import ProductPage from "../ProductPage/productPage";


class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            loading: true,
            currIdx: 0
        }
    }
    componentDidMount() {
        getDocs(collection(database, "collaterals"))
            .then((snapshot) => {
                console.log(snapshot);
                const products = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    console.log(data);
                    data['id'] = doc.id;
                    return data;
                })
                this.setState({
                    products: products,
                    loading: false
                });
            })
    }
    render() {
        const { products } = this.state;
        return (
            <div className="App">
                <Button variant="dark"
                    href={'/addproduct'} style={{ margin: "30px" }}>Add Version</Button>
                <div className="container">
                    <ProductPage products={this.state.products} />

                </div>

            </div>
        );
    }
}

export default Product;
