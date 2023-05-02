import React, { Component } from 'react'
//Component này sẽ đại diện cho component được load trên url
import { Outlet, NavLink } from 'react-router-dom'
//import thư viện connect from react redux 
import { connect } from 'react-redux'
class HomeTemplate extends Component {

  //hàm tính tiền cho phần giỏ hàng
  tinhTongTien = () => {
    let tongTien = 0;
    for (let itemCart of this.props.cart) {
      tongTien += itemCart.quantity * itemCart.price
    }
    return tongTien;

  }
  render() {
   
    return (
      <div>
        <header className='header p-3 bg-dark text-white'>
          <nav className='d-flex'>
            <div className='d-flex w-50'>


              <NavLink to='/' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white mx-2 nav-link bg-dark'} style={({ isActive }) => isActive ? { border: '2px solid orange' } : {}}>Home</NavLink>
              <NavLink to='/cart' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white mx-2 nav-link bg-dark'} style={({ isActive }) => isActive ? { border: '2px solid orange' } : {}}>Cart</NavLink>
              <NavLink to='/cars' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '2px solid orange' } : {}}>Cars</NavLink>
              <NavLink to='/login' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '2px solid orange' } : {}}>Login</NavLink>
              <NavLink to='/react-form' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '2px solid orange' } : {}}>ReactFormDemo</NavLink>
              <NavLink to='/react-lifecycle' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '2px solid orange' } : {}}>React-lifecycle</NavLink>


              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink class="dropdown-item nav-link" to="/redux-demo1">Demo Tăng giảm SL</NavLink>
                  <NavLink class="dropdown-item nav-link" to="/redux-demo2">Demo Chọn xe</NavLink>
                  <NavLink class="dropdown-item nav-link" to="/redux-demo3">Demo From nhân viên</NavLink>
                </div>
              </div>
            </div>

            <div className='w-50 text-end'>
              <NavLink className={"text-white"} to="cart-page" style={{ textDecoration: 'none' }}>
                <i className='fa fa-cart-plus fs-3'></i> ({this.props.cart.length}-{this.tinhTongTien()})
              </NavLink>
            </div>

          </nav>
        </header>
        <main style={{ minHeight: '650px' }}>
          <Outlet></Outlet>
        </main>
        <footer className='bg-dark text-white p-3 text-center '>
          <h1>Footer</h1>
        </footer>
      </div>
    )
  }
}
// thẻ Navlink(là 1 compontnen) giúp render loat lại phần  <Outlet></Outlet>của trang mà không phải load lại toàn bộ trang wed :  <a href=""></a>  đổi thành =>  <NavLink to={'/'}></NavLink>
//Ngoài ra còn hỗ trợ isActive (className?) để người dùng biết họ đang active(ở trang nào) ,vd:bg header là đen chữ trắng thì khi click vào (active ) sẽ có bg trắng chữ đen: className={({isActive}) => isActive? 'bg-dark text-white' : 'bg-white text-dark'} true hoặc false .tương tự với style={({isActive}) => isActive ? {''} : {}}
{/* <NavLink to='/cars' className={({isActive}) => isActive? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white mx-2 nav-link bg-dark'}>Cars</NavLink> <Navlink>là thể của react</Navlink>*/ }

const mapStateToProps = (state) => state.cartReducer;
export default connect(mapStateToProps)(HomeTemplate);//b3 binding state