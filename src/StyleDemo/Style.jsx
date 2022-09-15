import React, { Component } from 'react'
//cách 1 : khi import tất cả các component đều có thể sứ dụng đc (thường hay sử dụng)
import '../assest/style.css'
import style from "./StyleDemo.module.css"
export default class Style extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='color-red'> Mã Đức Lương</h3>
        <p className={`text-center ${style['color-pink']}`}> mã đức lương</p>
        <div style={{
            color:'green',
            border:'1px solid red',
            padding:'15px',
            backgroundColor:'#ffff'
        }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis atque accusantium illo repudiandae iusto praesentium animi, dolorum ad vero dolores veritatis ullam, sit sequi repellendus fugit facere dignissimos et.
        </div>
      </div>
    )
  }
}
