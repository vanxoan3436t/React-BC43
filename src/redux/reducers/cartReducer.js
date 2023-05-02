//rxslice state mặc định của reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [
        {//cái j cần hiển thị thì mới liệt kê
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "quantity": 1,
            "image": "https://svcy3.myclass.vn/images/adidas-prophere.png"
        }
    ]
}

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addToCartAction: (state, action) => {
            //imutable redux : tính bất biến hãy đọc trên mạng

            //xử lý  nghiệp vự thêm giỏ hàng
            let productClick = { ...action.payload };
            productClick.quantity = 1;
            //kiểm tra có trong giỏ hàng chưa => nếu chưa thì thềm vào nếu có rồi thì tăng số lượng 
            let prodCart = state.cart.find(pro => pro.id == productClick.id);
            if (prodCart) {
                prodCart.quantity += 1;
            } else {
                state.cart.push(productClick);
            }
        },
        delProAction: (state, action) => {
            let id = action.payload;
            let indexDel = state.cart.findIndex(prod => prod.id === id);
            if (indexDel !== -1) {
                //xử lý xoá
                state.cart.splice(indexDel, 1);
            }
        },
        changeQuantityAction: (state, action) => {
            let { id, quantity } = action.payload;
            let prodCart = state.cart.find(pro => pro.id == id);
            if (prodCart) {
                prodCart.quantity += quantity
            }
        }


    }
});

export const { addToCartAction, delProAction, changeQuantityAction } = cartReducer.actions//action creator

export default cartReducer.reducer

//let state = 1
//state = 2
//True

//let state = {quantity :1}
// state.quantity = 2
//False

// => let state = {...state.quantity:2} đối với ob phải như vậy clone nó ra bằng dấu ... 3 chấm ở trước