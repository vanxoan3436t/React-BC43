import React, { Component } from 'react'
import TextDemo from './TextDemo'
import Post from './Post'
import DemoChangeFontSize from '../State/DemoChangeFontSize'
import BaiTapChonXe from '../State/BaiTapChonXe'

export default class DemoProps extends Component {
    render() {

        const post1 = {
            tieuDe:'Cybersoft và những người bạn',
            noiDung: 'Lorem ipsum dolor sit amet.'
        }
        const post2 = {
            tieuDe:'Học react có khó không ?',
            noiDung: 'Không hề dễ =]]'
        }

        return (
            <div className='container'>
                <h3>DemoProps</h3>
                <div className='w-25'>
                    <TextDemo name='Cybersoft' price="1000" img="./img/products/red-car.jpg" />
                </div>
                <div className='w-25 mt-2'>
                    <TextDemo name='BC FrontEnd 43' price="2000" img="./img/products/black-car.jpg" />
                </div>
                <hr />
                <h3>Danh sách bài viết</h3>
                <Post info={post1} TheBaiTap={BaiTapChonXe}> 
                    <div className='alert alert-success'>
                        ghi chú 1
                    </div>
                </Post>

                <Post info={post2} TheBaiTap={DemoChangeFontSize}> 
                    <div className='alert alert-danger'>
                        ghi chú 2
                    </div>
                </Post>
            
            </div>
            //Post sẽ có key là info(ta tự đặt tên j cũng dc rồi ta truyền vào post1, post2)
        )
    }
}
