import React, { Component } from 'react'

export default class DemoDatabiding extends Component {

    renderTitle = () =>{
        return <div className='bg-light text-red text-center p-5'>
            Mã Đức Lương
        </div>
    }
    //databiding : có thể biding các giá trị như primitive value (string,boolean,number,...) và jsx
  render() {
    const hoten = 'Đức Lương '
    const prod = {
        id:1,
        name:'product 1',
        price: 1000,
    }
    return (
      <div className='container'>
        <h3>Họ tên : {hoten}</h3>
        <div className='mt-2 w-25'>
            <div className='card'>
                <img src="https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg" alt="" />
                <div className='card-body'>
                    <p>{prod.name}</p>
                    <p>{prod.price}</p>
                </div>
            </div>
        </div>
        {this.renderTitle()}
      </div>
    )
  }
}
