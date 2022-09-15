import React, { Component } from "react";

export default class HeaderLogin extends Component {
    //state : là thuộc tính có sẵn của react class component , chứa giá trị thay đổi trên giao diện người dùng thao tác (click, change , blur , ........)
    state={
        islogin :false
    }
    // islogin = false // true là đã đăng nhập
    userName = 'đức lương '

    renderLogin= () =>{
        if(this.state.islogin){
            return <div>
                Hello ! {this.userName}
            </div>
        }
        return <button
        className="btn btn-success my-2 my-sm-0"
        type="submit" onClick={()=>{
            this.handelLogin()
        }}
      >
        Login
      </button>
    }


    handelLogin = async () =>{
        //this.setstate : là phương thức có sẵn đc kế thừa từ react class componnent , cho phép thay đổi giá trị state cũ = ojb state mới , đồng thời render lại giao diện
        // lưu ý  : this.setstate là 1 phương thức bất đồng bộ
        // this.setState({
        //     islogin : true
        // },()=>{
        //     console.log(this.state)
        // })
        await this.setState({
            islogin : true
        })

        console.log(this.state)
    }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <div className="d-flex my-2 my-lg-0">
              {/* {this.islogin  ? <div>Hello ! {this.userName} </div> : <button
                className="btn btn-success my-2 my-sm-0"
                type="submit"
              >
                Login
              </button>} */}

              {this.renderLogin()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
