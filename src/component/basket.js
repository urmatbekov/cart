import React from 'react';
import BasketItem from "./basket-item";

const Basket = ({basket, plusProduct, minusProduct, deleteProduct}) => {
    const total = basket.reduce((ans, item) => {
        return ans + item.sum
    }, 0)
    return (
        <section>
            <div className="container jumbotron">
                {basket.map((item) => {
                    return <BasketItem deleteProduct={deleteProduct} minusProduct={minusProduct}
                                       plusProduct={plusProduct} key={item.id} {...item}/>
                })}
                <p className="text-right">Total {total}</p>
            </div>

        </section>
    );
}


export default Basket;
