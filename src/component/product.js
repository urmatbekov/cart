import React, {Component} from 'react';

class Product extends Component {
    render() {
        const {title,id, text, price,rebate,image,addProduct} = this.props;
        return (
            <div className=" col-3">
                <div className="card">
                    <img
                        src={image}
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <span onClick={addProduct(id)} className="btn btn-primary">Купить</span><br/>
                        <span className="rebate text-danger">{rebate} сом</span>
                        <span style={{marginLeft: '10px',textDecoration: 'line-through'}} className="price">{price} сом</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
