import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContent } from "./App";
import User from "./user.json";
import Movie from "./Movie.json";
import 'bootstrap/dist/css/bootstrap.css';


const Detail = () =>{
    const [movieAppear, setMovieAppear] = useState(Movie);
    const [user, setUser] = useState(User);
    const refSearch = useRef();
    return(
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
          <form className="form-inline my-2 my-lg-0">
          <input ref={refSearch} placeholder='Enter Name to search' />
               <button >Search</button>
          </form>
        </div>
        <t><Link to="/Login">Đăng nhập</Link></t>
        <Link to="/Register">Đăng ký</Link>
      </nav>
      <div className="detail">
			<div className="detail_wrap">
				<div className="detail_container">
					<div className="detail_img">
						<img src={movieAppear.IMG} alt="anh" />
					</div>
					<div className="detail_title">
						Title: <span>{movieAppear.des}</span>
					</div>
					<div className="detail_title">
						Album: <span>{movieAppear.year}</span>
					</div>
				</div>
				<div className="comment">
					Comments: <span>{user.comment}</span></div>
				
			</div>
		</div>
      </div>

     
    )
}

export default Detail;;