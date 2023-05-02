import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeQuantityAction, delProAction } from '../../../redux/reducers/cartReducer';

class TableCart extends Component {

  render() {
    let { cart, dispatch } = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name </th>
            <th>price </th>
            <th>quantily</th>
            <th>total </th>

          </tr>
        </thead>
        <tbody >
          {/* lập bằng hàm map phải có key (key là của hàm map định nghĩa thường lấy giá trị item.id) */}
          {cart.map(item => {
            return <tr key={item.id}>
              <td>{item.id}</td>
              <td> <img src={item.image} style={{ width: 50 }} alt="111" /> </td>
              <td>{item.name} </td>
              <td>{item.price} </td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price} </td>
              <td>
                <button className='btn btn-primary' onClick={() => {
                  const action = changeQuantityAction({
                    id: item.id,
                    quantity: 1
                  });
                  this.props.dispatch(action);
                }}>+</button>
                <button className='btn btn-primary' onClick={() => {
                  const action = changeQuantityAction({
                    id: item.id,
                    quantity: -1
                  });
                  this.props.dispatch(action);
                }}>-</button>

                <button className='btn btn-danger' onClick={() => {
                  //gửi action chứa id lên reducer để xử lý
                  const action = delProAction(item.id);

                  this.props.dispatch(action)
                }}><i className='fa fa-close'></i></button>
              </td>
            </tr>
          })}

        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart //định nghĩa lại state ở componte này tên là j có liên quan là đượcs 
})



export default connect(mapStateToProps)(TableCart)