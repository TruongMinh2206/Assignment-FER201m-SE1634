import '../App.css';
import user from '../user.json'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.css';

// import * as fs from 'fs';
function Register() {
  const [Account, setAccount] = useState(user)
  const navigate = useNavigate();
  const handleAddFormSubmit = (e) => {
    e.preventDefault()
    const email = document.getElementById('inputEmail3').value
    const passsword = document.getElementById('inputPassword3').value
    const fullName = document.getElementById('inputFullName3').value
    const gender = document.forms.elements.elements["gridRadios"].value
    const newAccount = {
      id: Account.length + 1,
      name: fullName,
      passsword: passsword,
      gender: gender,
      email: email, 
      comment: ''
    }
    // Cập nhật lại persons
    setAccount([...Account, newAccount])
    navigate("/Login")
    // write() 
  }

  // const fs = require('fs');
  // const account = JSON.stringify(Account); 
  // const write = () => {
  //   fs.writeFile('./q2.json', account, 'utf8', (err) => {
  //       if (err) {
  //           console.log(`Error writing file: ${err}`);
  //       } else {
  //           console.log(`File is written successfully!`);
  //       }
  //   });
  // }
  

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        PHIM HAY
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to="/" className='trangchu'>Trang chủ</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Nhập tên phim cần tìm" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm</button>
          </form>
        </div>
        <t><Link to="/Login">Đăng nhập</Link></t>
        <Link to="/Register">Đăng ký</Link>
      </nav>
      <form className="form-sign-up" id="elements" onSubmit={handleAddFormSubmit}>
        <h4>ĐĂNG KÍ TÀI KHOẢN</h4>
        <div className="form-group">
          <div className="input">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email addresss *" />
          </div>
        </div>
        <div className="form-group">
          <div className="input">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password *" />
          </div>
        </div>
        <div className="form-group">
          <div className="input">
            <input type="text" className="form-control" id="inputFullName3" placeholder="Fullname" />
          </div>
        </div>
        <fieldset className="form-group ">
          <legend className="col-form-label col-sm-3 float-sm-left pt-0">Giới tính: </legend>
          <div className="col-sm-9">
            <div className="form-check row">
              <n >
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Male" checked />
                <label className="form-check-label" for="gridRadios1">
                  Nam
                </label>

              </n>
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Female" />
              <label className="form-check-label" for="gridRadios2">
                Nữ
              </label>

            </div>

          </div>
        </fieldset>
        <div>
          Nếu tài khoản đã tồn tại.
          <Link to="/Login">Đăng nhập</Link>

        </div>
        <div className="form-group row" >
          <div className="col-sm-10">
            <button type="submit" className="signupbutton btn btn-primary" >Đăng ký</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
