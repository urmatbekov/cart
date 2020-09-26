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
            return this.addCount(basket,index)
        })
    }

    addCount = (basket,index,step=1) => {
        const item = {...basket[index]}
        item.count += step
        if (item.count < 1){
            return ;
        }
        item.sum = item.count * item.rebate
        return {basket: [...basket.slice(0,index), item,...basket.slice(index+1)]};
    }

    plusProduct = (id, step) => () => {
        this.setState(({basket}) => {
            const index = basket.findIndex((item) => item.id === id)
            if (index >= 0) {
                return this.addCount(basket,index,step)
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
