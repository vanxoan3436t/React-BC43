import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoClass from './Components/DemoClass';
import Home from './Components/HomeComponent/Home';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoLogin from './State/DemoLogin';
import DemoState from './State/DemoState';
import StyleDemo from './StyleDemo/StyleDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoPageLogin from './State/DemoPageLogin';

import './assets/scss/index.scss';
import DemoProps from './Props/DemoProps';
import ProductList from './Props/ProductList/ProductList';
import ProductDetall from './Props/ProductDetall/ProductDetall';
//Cấu hình react router dom
// npm i react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeTemplate from './Templates/HomeTeamplate';
import BaiTapChonXe from './State/BaiTapChonXe';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ReactFormDemo from './ReactFormDemo/ReactFormDemo';
import ReactLifeCycle from './Pages/ReactLifeCycle/ReactLifeCycle';
//Cấu hình redux 
import { Provider } from 'react-redux';
import DemoBaiTapChonXe from './Pages/ReduxDemo/DemoBaiTapChonXe';
import { store } from './redux/configStore';
import DemoFromNhanVien from './Pages/ReduxDemo/DemoFromNhanVien';
import HomePage from './Pages/ReduxDemo/ShopDemo/HomePage';
import CartPage from './Pages/ReduxDemo/ShopDemo/CartPage';
// import DemoTangGiamSoLuong from './Pages/ReduxDemo/DemoTangGiamSoLuong';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(// in ra giao diện thông qua id là: root , mà không cần liên kết script bằng src 


  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<HomePage />}></Route>
          <Route path='cart' element={<ProductDetall />}></Route>
          <Route path='cars' element={<BaiTapChonXe />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='react-form' element={<ReactFormDemo />}></Route>
          <Route path='react-lifecycle' element={<ReactLifeCycle />}></Route>
          {/* <Route path='redux-demo1' element={<Demo />}></Route> */}
          <Route path='redux-demo2' element={<DemoBaiTapChonXe />}></Route>
          <Route path='redux-demo3' element={<DemoFromNhanVien />}></Route>
          <Route path='*' element={<Navigate to={'/'} />}></Route>

          {/*  <Route path='*' element={<Navigate to={'/'}/>}></Route> làm như này sẽ về thư mục gốc là trang Home hoặc sẽ dẫn đến trang 404 mà ta tự làm qua thuộc tính "to" của Navigate  :to={'trang 404 đặt trong đây'} Ngoài ra Navigate còn sử dụng cho nhưng trang wed mà yêu cầu đăng nhập bắt buộc phải đăng nhập mới vào dc trang nếu mật khẩu tài khoản không đúng thì sẽ đá lại trang đăng nhập :<Navigate to={'trang đăng nhập'}/>}>*/}
          <Route path='cart-page' element={<CartPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>


    {/* <Home /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <DemoLogin /> */}
    {/* <DemoState /> */}
    {/* <StyleDemo /> */}
    {/* <RenderWithMap /> */}
    {/* <DemoPageLogin /> */}
    {/* <DemoProps /> */}
    {/* <ProductList/> */}
    {/* <ProductDetall/> */}

  </Provider>

);
