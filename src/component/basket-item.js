import React from 'react';

const BasketItem = ({image, title, rebate}) => {
    return (
        <div className="row">
            <div className="col-2"><img
                src={image}
                className="card-img-top" alt="..."/></div>
            <div className="col-2">{title}</div>
            <div className="col-3">
                <div style={{flexWrap: "nowrap"}} className="row">
                    <button className="btn btn-primary">-</button>
                    <input className="form-control" min="0" name="quantity" value="1" type="number"/>
                    <button className="btn btn-primary">+</button>
                </div>
            </div>
            <div className="col-2">{rebate} com</div>
            <div className="col-2">delete</div>
        </div>
    );
}


export default BasketItem;
