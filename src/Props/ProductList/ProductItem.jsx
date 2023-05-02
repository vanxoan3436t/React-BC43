import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        //Lấy giá trị từ props name từ component cha truyền vào
        //prodInfo={item} có tất cả thuộc tính như:id ,name, price ... vv mà ta có (thương thì trong tương lai sẽ là dữ liệu call từ Api backend về )
        let {prodInfo} = this.props;
    
        return (
          <div className='card'>
            <img src={prodInfo.image} alt='...' />
            <div className='card-body'>
                <h3>{prodInfo.name}</h3>
                <p>{prodInfo.price}</p>
                <button className='btn btn-dark'>
                    Add to cart <i className='fa fa-cart-plus'></i>
                </button>
            </div>
          </div>
        )
      }
}
