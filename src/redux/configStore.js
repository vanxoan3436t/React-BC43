// npm i react-redux thư viện để kết nối redux với react
import { configureStore } from '@reduxjs/toolkit';
import nhanvienReducer from './reducers/nhanvienReducer';
import cartReducer from './reducers/cartReducer';

export const store = configureStore({
    reducer: {//reducer thuật ngữ của redux,1 cái state có thẻ có hàng trăm state
        //(state = 1) giá trị đầu vào = 1 ,là giá trị mặc định ban đầu
        number: (state = 15, action) => {
            if (action.type === 'TANG_GIAM_SOLUONG') {
                state = state + action.payload;
            }


            return state; // 16
        },
        color: (state = 'red', action) => {
            return state;
        },
        imgCar: (state = './img/products/red-car.jpg', action) => {
            if (action.type === 'CHANGE_COLOR') {
                state = action.payload;
            }
            return state;
        },
        //state = 000xxx
        // nhanVienReducer: (state = { maNhanVien: '0002', tenNhanVien: 'Hoàng văn Soạn', luongCanBan: '1500' }, action) => {
        //     // if(action.type === 'CHANGE_INFO') {
        //     //     state = action.payload;
        //     // }
        //     switch (action.type) {
        //         case 'CHANGE_INFO': {
        //             let { id, value } = action.payload;
        //             state[id] = value;
        //         }; break;
        //     }
        //     //immutable :tính bất biến
        //     return { ...state };
        // }
        nhanVienReducer:nhanvienReducer,

        cartReducer:cartReducer,

    }

});