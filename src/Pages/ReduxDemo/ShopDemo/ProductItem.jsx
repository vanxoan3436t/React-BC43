import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCartAction } from '../../../redux/reducers/cartReducer';

class ProductItem extends Component {
  render() {
    //nhận props từ componte cha truyền vào
    let { product } = this.props
    return (
      <div className='card'>
        <img src={product.image} />
        <div className='card-body'>
          <h3>Tên sản phẩm :{product.name}</h3>
          <p>Giá tiền : {product.price}</p>
          <button className='btn btn-dark' onClick={() => {
            //cách 1 :tạo băng tay
            // const action = {
            //   type: 'cartReducer/addToCartAction',//muốn gửi đi đâu thì lấy type bằng tên đó trong file cartReducer.js
            //   payload: product
            // };

            //cách 2 
            const action = addToCartAction(product);//cách này chỉ cần có payload: product là dc . còn type thì chỉ cần sửa tên hàm trong cartReducer là dc 
            //dùng hàm  this.props.dispatch(); do redux cung cấp cho 
            this.props.dispatch(action);
          }}>
            Add to cart <i className='fa fa-cart-plus'></i>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(ProductItem)