import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // điều hướng tới trang khác
import { UserContent } from "./App";
import user from "./user.json";
import "./style.css";
function Login() {
    const [users, setUsers] = useState(user);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { setUser } = useContext(UserContent);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = document.getElementById('inputEmail3').value
        const password = document.getElementById('inputPassword3').value
        const result = users.filter((users) => users.email === email && users.password === password)
        if (result.length > 0)
            navigate("/")
        else
        alert("Đăng nhập lại")

    }


    return (
        <div>
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
                    <form className="form-inline my-2 my-lg-0" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Nhập tên phim cần tìm" aria-label="Search" id="search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm</button>
                    </form>
                </div>
                <t><Link to="/Login">Đăng nhập</Link></t>
                <Link to="/Register">Đăng ký</Link>
            </nav>

            <form className="form-sign-up" id="elements" onSubmit={handleSubmit}>
              <h3> Login System</h3>
                <div className="form-group">
                    <div className="input">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email addresss *" />
                        <div className="error" id="enter_email">enter again</div>
                    </div>
                </div>
<div className="form-group">
                    <div className="input">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password *" />
                        <div className="error" id="enter_pass">enter again</div>
                    </div>
                </div>



                <div className="form-group row" >
                    <div className="col-9">
                        <button type="submit" className="signupbutton btn btn-primary" >Đăng nhập
                        </button>
                    </div>
                    <div lassName="col-3" >Quên mật khẩu</div>
                </div>

                <hr></hr>
                <div>
                    Ban chưa có tài khoản ?
                    <Link to="/Register">Đăng ký</Link>

                </div>
            </form>

        </div>
    );
};

export default Login;