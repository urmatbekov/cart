import React, {Component} from 'react';
import Product from "./product";
import Basket from "./basket";

class App extends Component {

    state = {
        basket: [],
        data: [
            {
                id: 1,
                title: 'Asan',
                rebate: 100,
                price: 120,
                text: 'Bla Bla Bla Bla Bla Bla Bla ',
                image: "//www-file.huawei.com/-/media/corp2020/home/box/1/wa-pctchgt2.jpg"
            },
            {
                id: 2,
                title: 'Hasan',
                rebate: 200,
                price: 234,
                text: 'Bla Bla Bla Bla Bla Bla Bla ',
                image: "//www-file.huawei.com/-/media/corp2020/home/box/1/wa-pctchgt2.jpg"
            },
            {
                id: 3,
                title: 'Masan',
                rebate: 500,
                price: 543,
                text: 'Bla Bla Bla Bla Bla Bla Bla ',
                image: "//www-file.huawei.com/-/media/corp2020/home/box/1/wa-pctchgt2.jpg"
            },
            {
                id: 4,
                title: 'Uson',
                rebate: 100,
                price: 123,
                text: 'Bla Bla Bla Bla Bla Bla Bla ',
                image: "//www-file.huawei.com/-/media/corp2020/home/box/1/wa-pctchgt2.jpg"
            },
        ],

    }

    addProduct = (id) => () => {
        this.setState(({data, basket}) => {
            const index = basket.findIndex((item) => item.id === id)
            if (index === -1) {
                const item = data.find((item) => item.id === id)
                const newItem = {...item, sum: item.rebate, count: 1}
                return {basket: [...basket, newItem]}
            }
            return {};
        })
    }

    plusProduct = (id,step) => () => {
        this.setState(({basket}) => {
            const index = basket.findIndex((item) => item.id === id)
            if (index >= 0) {
                const item = basket[index]
                const count = item.count + step
                const sum = count * item.rebate
                const newItem = {...item, count, sum}
                return {basket: [...basket.slice(0, index), newItem, ...basket.slice(index + 1)]}
            }
        })
    }

    render() {
        return (
            <div>
                <div className='container jumbotron'>
                    <div className="row">
                        {this.state.data.map((item) => {
                            return <Product addProduct={this.addProduct} key={item.id} {...item}/>
                        })}

                    </div>
                </div>
                <Basket minusProduct={this.minusProduct} plusProduct={this.plusProduct} basket={this.state.basket}/>
            </div>
        );
    }
}

export default App;
