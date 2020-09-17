import React from 'react';
import BasketItem from "./basket-item";

const Basket = ({basket}) => {
    return (
        <section>
            <div className="container jumbotron">
                {basket.map((item) => {
                    return <BasketItem key={item.id} {...item}/>
                })}
            </div>
        </section>
    );
}


export default Basket;
