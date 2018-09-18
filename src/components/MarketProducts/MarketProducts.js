import React, { Component } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';

class MarketProducts extends Component {

    render() {
        const list = this.props.products.map(element => (
            <ProductsCard 
                key={element.id}
                id={element.id}
                category={element.category}
                created={element.created}
                email={element.email}
                onlineId={element.online_id}
                description={element.product_description}
                image={element.product_image}
                productName={element.product_name}
            />
        ))
        console.log(list, 'test')
    
        return (
            <div>
                {list}
            </div>
        );
    }
}


export default MarketProducts;