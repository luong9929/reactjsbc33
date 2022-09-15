import React, { Component } from 'react'

export default class StateDemo extends Component {

    state={
        Fsize :30,
        color:'purple',
        imgSrc:"http://i.pravatar.cc?u=1"
    }

    ramdomAvatar= () =>{
        let randomNumber = Math.random(Math.floor()*100)
        let imgSrcNew = "http://i.pravatar.cc?u=" + randomNumber
        this.setState({
            imgSrc:imgSrcNew
        })
    }



  render() {
    return (
      <div className='container'>
        <h3>Ví Dụ 1 : tăng giảm font-size của đoạn văn bản sau</h3>
        <p style={{fontSize:this.state.Fsize}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, culpa est. Corrupti aperiam eius, ad voluptas vel aliquid debitis ut cum sit ea, earum similique modi et veritatis voluptates accusantium.
        </p>
        <button className='mx-2 btn btn-success' onClick={()=>{
            this.setState({
                Fsize:this.state.Fsize + 1
            })
        }}>+</button>
        <button className='mx-2 btn btn-success'onClick={()=>{
            this.setState({
                Fsize:this.state.Fsize - 1
            })
        }}>-</button>
        <hr />

        <h3>Ví dụ 2 : thay đổi màu sắc của div#home</h3>
        <div className='fa fa-home fa-10x ' style={{color:this.state.color}}></div>
        <p>chọn màu : </p>
        <select className='form-control w-25' onChange={(even)=>{
            this.setState({
                color:even.target.value
            })
        }}>
            <option value={'red'}>Red</option>
            <option value={'green'}>Green</option>
            <option value={'blue'}>Blue</option>
        </select>

        <hr />
        <h3>Ví dụ 3 : tinder app</h3>
        <div className='card w-25'>
                <img src={this.state.imgSrc} alt="..." />
                <div className='card-body'>
                    <button className='btn btn-danger' onClick={()=>{
                        this.ramdomAvatar()
                    }}>Random</button>
                </div>
        </div>
      </div>
    )
  }
}
