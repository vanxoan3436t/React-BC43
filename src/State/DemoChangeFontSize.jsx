import React, { Component } from 'react'


//B1: Dàn layout
//B2: state =>  fontSize: number
//B3: Đưa state lên giao diện
//B4: thay đổi state
export default class DemoChangeFontSize extends Component {
  
  state = {
     fSize:30
  }


  render() {
    return (
      <div className='container' >
        <h3>Bài tập tăng giảm font-size</h3>
        <p style={{fontSize:`${this.state.fSize}px`}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis unde quas fugiat culpa vel sunt dolor tempora libero non voluptas?</p>

        <button className='btn btn-success mx-2' onClick={()=>{
            this.setState({
                fSize: this.state.fSize + 5
            })
        }}>+</button>
        <button className='btn btn-success mx-2' onClick={()=>{
            this.setState({
                fSize: this.state.fSize - 5
            })
        }}>-</button>
      </div>
    )
  }
}
