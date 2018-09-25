import React, { Component } from 'react';
import MarketProducts from '../MarketProducts/MarketProducts';

class Market extends Component {
    constructor() {
        super()
        
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('/api/products').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({
                products: data.products
            })
        })
    }

    render() {
        return (
            <div className="Market">
                <MarketProducts products={this.state.products} />
            </div>
        );
    }
}

export default Market;
