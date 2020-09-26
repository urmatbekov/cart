import React from 'react';

const BasketItem = ({image,id, title, sum,count,plusProduct,minusProduct}) => {
    return (
        <div style={{marginBottom:'10px'}} className="row">
            <div className="col-2"><img
                src={image}
                className="card-img-top" alt="..."/></div>
            <div className="col-2">{title}</div>
            <div className="col-3">
                <div style={{flexWrap: "nowrap"}} className="row">
                    <button onClick={plusProduct(id,-1)} className="btn btn-primary">-</button>
                    <span className="form-control">{count}</span>
                    <button onClick={plusProduct(id,1)} className="btn btn-primary">+</button>
                </div>
            </div>
            <div className="col-2">{sum} com</div>
            <div className="col-2"><button className="btn btn-primary"> delete</button></div>
        </div>
    );
}


export default BasketItem;
