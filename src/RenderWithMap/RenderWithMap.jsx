import React, { Component } from 'react'

export default class RenderWithMap extends Component {
  products = [
    {id:1,name:'red car', price:1000, img:'./img/products/red-car.jpg'},
    {id:2,name:'silver car', price:1000, img:'./img/products/silver-car.jpg'},
    {id:3,name:'black car', price:1000, img:'./img/products/black-car.jpg'},
    {id:4,name:'steel car', price:1000, img:'./img/products/steel-car.jpg'},
  ]

//   renderProduct = () => {
//     let output = []; //mảng các thẻ tr dựa trên dữ liệu của this.products  [<tr></tr>,<tr></tr>]
//     for(let prod of this.products) {
//         //Mỗi lần duyệt qua 1 object thì tạo ra 1 jsx tr
//         let jsxTr = <tr key={prod.id}>
//             <td>{prod.id}</td>
//             <td>{prod.name}</td>
//             <td>{prod.price}</td>
//             <td><img src={prod.img} alt="..." style={{width:50}} /></td>
//         </tr>;
//         //Đưa jsx tr vào mảng output
//         output.push(jsxTr);
//     }
//     return output// [<tr></tr>,<tr></tr>,<tr></tr>,<tr></tr>]
//   }

  renderMapTr = () => {
    let arrJSXTr = this.products.map((prod)=>{
        return  <tr key={prod.id}>
                     <td>{prod.id}</td>
                     <td>{prod.name}</td>
                     <td>{prod.price}</td>
                     <td><img src={prod.img} alt="..." style={{width:50}} /></td>
                </tr>
    });

    return arrJSXTr
  }

  renderCardProduct = () => {

    let arrDiv = this.products.map((prod) => {
        return <div className='col-3' key={prod.id}>
            <div className='card'>
                <img src={prod.img} alt="..." className="w-100" />
                <div className="card-body">
                    <h3>{prod.name}</h3>
                </div>
            </div>
        </div>
    })

    return arrDiv; //[<div class...></div>]
  }

  render() {
    return (
        <div className='container'>
            <h3>Danh sách sản phẩm</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>img</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderMapTr()}
                </tbody>
            </table>
            <hr />
            <h3 className='text-center'>Product list</h3>
            <div className="row">
                {this.renderCardProduct()}
            </div>
        </div>
      
    )
  }
}


// function main () {


//     return [{
//         id:1
//     },
//     {
//         id:1
//     }]
    
// }