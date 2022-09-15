import React, { Component } from 'react'

export default class HandleEvent extends Component {
    click = (event) =>{
        alert('Say Hello')
        console.log(event.target.className)
        event.target.className = 'btn btn-danger'
        event.target.innerHTML = 'ĐỊT CON MẸ MÀY '
    }
    show = (name) =>{
        alert('Hello' + name)
    }
  render() {
    return (
      <div className='container'>
        <button className='btn btn-warning' onClick={this.click}>Say Hello</button>

        <button className='btn btn-warning mx-2' onClick={(e)=>{
            this.show('Đức Lương ');
            e.target.innerHTML = 'HI ! Đức Lương'
        }}>Hi!</button>
      </div>
    )
  }
}
