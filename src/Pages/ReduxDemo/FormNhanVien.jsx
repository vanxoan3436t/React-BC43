import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInfo } from '../../redux/reducers/nhanvienReducer';


//xóa export
class FormNhanVien extends Component {
    handleChangeInput = (e) => {

        let { id, value } = e.target;
        //cách 1:tạo bằng tay
        // const action = {
        //     type:'nhanVienReducer/changeInfo',//theo cách reduxslice nhanVienReducer:name, changeInfo:hàm xử lý
        //     payload: {
        //       id,
        //       value
        //     }
        //   }

        //cách 2 :
        const action = changeInfo({ id, value });
        //Đưa object {id,value} lên redux 
        this.props.dispatch(action);

    }

    render() {
        return (
                        <form >
                    <h3>Thông tin nhân viên </h3>
                    <div className="form-group">
                        <input className='form-control mt-3' id='maNhanVien' onInput={this.handleChangeInput} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control mt-3' id="tenNhanVien" onInput={this.handleChangeInput} />
                    </div>
                    <div className='form-group'>
                        <input className='form-control mt-3' id="luongCanBan" onInput={this.handleChangeInput} />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success mt-3' type='submit' >Hiển thị</button>
                    </div>
                </form>

               
          

        )
    }
}

const mapStateToProps = (state) => state;//retunr về state


export default connect(mapStateToProps)(FormNhanVien)