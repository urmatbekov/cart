import React from 'react';
import BasketItem from "./basket-item";

const Basket = ({basket,plusProduct,minusProduct}) => {
    return (
        <section>
            <div className="container jumbotron">
                {basket.map((item) => {
                    return <BasketItem minusProduct={minusProduct} plusProduct={plusProduct} key={item.id} {...item}/>
                })}
            </div>
        </section>
    );
}


export default Basket;
