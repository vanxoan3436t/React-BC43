import React, { Component } from 'react'
import CreateProduct from './CreateProduct'

export default class ReactFormDemo extends Component {

    state = {
        arrProduct: [
            {idProduct:'01',name:'Iphone X', price:1000,type:'Phone',img:'https://i.pravatar.cc?u=1',desc:'Điện thoại iphonex'},
            { idProduct: '02', name: 'Iphone XS', price: 2000, type: 'Phone', img: 'https://i.pravatar.cc?u=2', desc: 'Điện thoại iphonexs' },
        ],
        productEdit: {// mỗi component là mỗi class khác nhau ,không thể chuyền state từ component này biến thành state  của component khác được .mà phải chuyền 1 cách chung gian   khi ấn vào button ở dưới thì state của componer này thay đổi (productEdit) sau đó ta mới chuyền component này (productEdit) đi dưới dạng props, rồi qua componet khác mới lấy state của  component khác sét props cho nó
            idProduct: '',
            name: '',
            price: 0,
            type: '',
            img: '',
            desc: ''
        }
    }

    addProduct = (prodInfo) => {
        console.log(prodInfo);
        this.state.arrProduct.push(prodInfo);
        this.setState({
            arrProduct: this.state.arrProduct
        })
    }

    delProduct = (idProductDel) => {
        console.log(idProductDel)
        let indexDel = this.state.arrProduct.findIndex(prod => prod.idProduct === idProductDel);//hàm findIndex là để tìm phần tử 
        if (indexDel !== -1) {
            this.state.arrProduct.splice(indexDel, 1);//đã bị xóa phần tử cần xóa
        }
        // đã tìm ra cái cần xóa và đã xóa đi .
        //Cuối cùng setState
        this.setState({
            arrProduct: this.state.arrProduct// ở đây ra gán cái đã xóa cho thằng cũ ban đầu (thằng ban đầu đã dc thay thế bằng thằng mới nhưng bị xóa mất 1 phần tử ,10 phần còn có 9 phần)
        })
    }

    updateProduct = (newProduct) => {
        let prod = this.state.arrProduct.find(prod => prod.idProduct == newProduct.idProduct);
        if(prod) {
            for(let key in prod) {
                prod[key] = newProduct[key];
            }
        }
        //Set State sau khi cập nhật
        this.setState({
            arrProduct: this.state.arrProduct
        })
    }


    render() {
        return (
            <div className='container'>
                <CreateProduct  updateProduct={this.updateProduct} productEdit={this.state.productEdit} addProduct={this.addProduct} />
                <table className='table mt-2'>
                    <thead className='bg-dark text-white fw-bold'>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                            <th>type</th>
                            <th>desc</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.arrProduct.map((prod) => {
                            return <tr key={prod.idProduct}>
                                <td>{prod.idProduct}</td>
                                <td>{prod.name}</td>
                                <td><img src={prod.img} width={50} height={50} alt={prod.name} /></td>
                                <td>{prod.price}</td>
                                <td>{prod.type}</td>
                                <td>{prod.desc}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={()=>{
                                        this.setState({
                                            productEdit: prod
                                        })
                                    }}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => {
                                        this.delProduct(prod.idProduct);
                                    }}>Del</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}