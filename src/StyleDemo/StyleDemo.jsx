import React, { Component } from 'react'
import './style.css';

import objectStyle from './style.module.css'


export default class StyleDemo extends Component {
    
  render() {

    const bg = '#000';

    return (
      <div className='container'>
        <p className='color-red'>Lorem ipsum dolor sit amet.</p>
        <p className={objectStyle.colorPrimary}>Lorem ipsum dolor sit amet.</p>
        <p className={objectStyle['color-danger']}>Lorem ipsum dolor sit amet.</p>

        <p className={`${objectStyle['color-danger']} text-center p-3 bg-dark m-2`}>Lorem ipsum dolor sit amet.</p>


        <p style={{backgroundColor:bg}}> Lorem, ipsum dolor.</p>

      </div>
    )
  }
}
