import React, { Component } from 'react'

export default class CreateProduct extends Component {
// trong react hạn chế(tuyệt đối không dùng Dom đến thẳng giao diện vì có thể dom sẽ Dom đến các componte khác và có thể sai giá trị )
    state = {
        values: {
            idProduct: '',
            name: '',
            price: '',
            img: '',
            type: 'phone',
            desc: ''
        },
        errors: {//(*)' tăng khả năng trải nhiệm người dùng cho người dùng biết có giấu * là bắt buộc phải điền thông tin vào 
            idProduct: '(*)',
            name: '(*)',
            price: '(*)',
            img: '(*)',
            desc: '(*)'
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();//HÀM này để tránh các form truyền thống của browser k reload lại trang wed khi ta ấn submid (khi ta điền thông tin nếu reload lại trang thì thông tin sẽ bị mất hết dẫn đến không xử lí dc các giá trị mà ta nhập)
        for (let key in this.state.errors) {//duyệt ob errors (thuộc tính của errors phải rỗng hết nếu có dữ liệu bên trong: 'có dữ liệu' , thì là có lỗi )
            if(this.state.errors[key] !== '') {// chỉ cần 1 cái thuộc tính trong errors khác với rỗng: 'có lỗi' thì alert và retunr không cần làm nữa
                alert('Dữ liệu nhập chưa hợp lệ');
                return;
            }
        }

        //call api ....

        let {addProduct} = this.props;

        addProduct(this.state.values);
       
    }


    handleChangeInput = (e) => {// những thứ giông nhau sẽ viết thành hàm hết
        //sự kiện diễn ra trên thẻ là (event) <input data-type="number" className='form-control' id="price" name='price' onInput={this.handleChangeInput} /> nó sẽ giúp ta Dom ngược lại trên thẻ để lấy value hoặc id ... =>  let { value, id } = e.target;
        let { value, id } = e.target; //e.target chính là thẻ input đang diễn ra sự kiện oninput
        let dataType = e.target.getAttribute('data-type');
        let minLength = e.target.getAttribute('data-minlength');
        let maxLength = e.target.getAttribute('data-maxlength');
        //Xử lý this.state.values
        let newValue = {...this.state.values};
        newValue[id] = value;
        //Xử lý errors
        let newError = {...this.state.errors};
        let messError = '';
        if(value.trim() === ''){
            messError = id + ' không được bỏ trống !';
        }else {
            if(dataType) {
                switch(dataType) {
                    case 'number': {
                        let regexNumber = /^\d+$/;
                        if(!regexNumber.test(value)){
                            messError = id + ' phải là số !';
                        };break;
                    }
                    case 'string' : {
                        let regexString = /^[a-zA-Z]+$/;
                        if(!regexString.test(value)){
                            messError = id + ' phải là ký tự !';
                        };break;
                    }
                }
            }
            
        }
        newError[id] = messError;
        //Cập nhật lại state của value và cả error sau khi xử lý
        this.setState({
            values:newValue,
            errors: newError
        }, () => {
            console.log(this.state);
        })
    }

   //Can thiệp trước khi props mới truyền vào và render ra giao diện thì đem props gắn vào state 
//    static getDerivedStateFromProps(newProps,currentState) {
//     if(newProps.productEdit.idProduct !== currentState.values.idProduct) {

//         currentState.values = {...newProps.productEdit}
//         return currentState;
//     }
    
//     return null;

//   }

 //Chỉ chạy khi props thay đổi và trước khi render (thường dùng cho việc gán props vào state )
 componentWillReceiveProps(newProps) {
    this.setState({
        values: newProps.productEdit
    })
}

render() {

    let {idProduct,name,price,img,type,desc} = this.state.values;
        return (
            <form className='card' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>Product info</div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Id</p>
                                <input data-type="number" className='form-control' id="idProduct" name="idProduct" onInput={this.handleChangeInput} value={idProduct} />
                                <p className='text text-danger'>{this.state.errors.idProduct}</p>
                            </div>
                            <div className='form-group'>
                                <p>name</p>
                                <input data-type="string" className='form-control' id="name" name="name" onInput={this.handleChangeInput} value={name} />
                                <p className='text text-danger'>{this.state.errors.name}</p>
                            </div>
                            <div className='form-group'>
                                <p>price</p>
                                <input data-type="number" className='form-control' id="price" name='price' onInput={this.handleChangeInput} value={price}/>
                                <p className='text text-danger'>{this.state.errors.price}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>img</p>
                                <input className='form-control' id="img" name='img' onInput={this.handleChangeInput} value={img} />
                                <p className='text text-danger'>{this.state.errors.img}</p>
                            </div>
                            <div className='form-group'>
                                <p>type</p>
                                <select value={type} id="type" name='type' className='form-control' onInput={this.handleChangeInput}>
                                    <option value="phone">Phone</option>
                                    <option value="tablet">Tablet</option>
                                    <option value="laptop">Laptop</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <p>desc</p>
                                <input data-minlength='6' data-maxlength='32' className='form-control' id="desc" name='desc' onInput={this.handleChangeInput} value={desc}/>
                                <p className='text text-danger'>{this.state.errors.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success' type='submit'>Create</button>
                    <button className='btn btn-success' type='button' onClick={()=>{
                        let{updateProduct} = this.props;
                        updateProduct({...this.stat})
                        
                    }}>Update</button>
                </div>
            </form>
        )
    }
}



