import React, { Component } from 'react'

export default class Item extends Component {



    render() {
        //lấy từ propsName của component cha truyền vào
        let { phone, xemChiTiets,themGioHang } = this.props;

        return (
            <div className='card'>
                <img src={phone.hinhAnh} alt='...' height={'100%'} />
                <div className='card-body'>
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan.toLocaleString()} VND</p>
                    <button className='btn btn-success' onClick={() => {
                        xemChiTiets(phone)
                    }}>Xem chi tiết</button>

                  
                    <button className='btn btn-dark mx-2' onClick={()=>{
                        themGioHang(phone);
                    }}><i className='fa fa-cart-plus'></i> Thêm giỏ hàng</button>

                </div>
            </div>
        )
    }
}
