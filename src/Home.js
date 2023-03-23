import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContent } from "./App";
import User from "./user.json";
import Movie from "./Movie.json";
import MovieCard from "./MovieCard";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


const Home = () => {
	// Lấy dữ liệu từ user.json và lưu vào state user

	// Lấy dữ liệu từ Movie.json và lưu vào state movieAppear
	const [movieAppear, setMovieAppear] = useState(Movie);

	// Lấy tham chiếu đến ô nhập liệu search
	
	const [selectedCategory, setSelectedCategory] = useState("");


	// Lấy slug từ URL (nếu có)
	//   const { slug } = useParams();

	// Lấy thông tin location (để lấy giá trị của tham số tìm kiếm "name")


	// Lấy giá trị của tham số tìm kiếm "name" từ URL (nếu có) và lưu vào biến title
	//   const title = new URLSearchParams(search).get("name") || "";

	// Sử dụng useEffect để tải lại dữ liệu user khi có thay đổi


	// Sử dụng hook useNavigate để điều hướng đến các trang khác
	const navigate = useNavigate();

	// Sử dụng useEffect để kiểm tra xem người dùng đã đăng nhập hay chưa. 
	// Nếu chưa đăng nhập thì sẽ điều hướng về trang chủ
	//   useEffect(() => {
	//     if (!user?.email) {
	//       navigate("/")}})



	const handleSearch = (event) => {
		event.preventDefault();
		const searchVal = document.getElementById('search').value
		const searchResult = movieAppear.filter(movie => movie.name.toLowerCase().startsWith(searchVal.toLowerCase()))
		setMovieAppear(searchResult)
	}
	const handleFilter = (category) => {
		// Nếu thể loại được chọn trùng với thể loại đã chọn trước đó,
		// không cần cập nhật lại danh sách phim hiển thị
		if (category === "all") {
			setMovieAppear(Movie);
		} else {
			if (category === selectedCategory) {
				return;
			}

			// Lọc danh sách phim theo thể loại được chọn
			const filteredMovies = Movie.filter((movie) => movie.category === category);
			setMovieAppear(filteredMovies);
			setSelectedCategory(category);
		}
	};


	return (

		<div className="home">


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
					<form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
<input className="form-control mr-sm-2" type="search" placeholder="Nhập tên phim cần tìm" aria-label="Search" id="search"/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm</button>
					</form>
				</div>
				<t><Link to="/Login">Đăng nhập</Link></t>
				<Link to="/Register">Đăng ký</Link>
			</nav>

			<div className='body_home row'>
				<div className="col-3">
					<h3>Thể Loại</h3>
					<ul>
					<li onClick={() => handleFilter("all")}>Tất cả</li>
					{Movie.reduce(
						(categories, movie) =>
							categories.includes(movie.category)
								? categories
								: [...categories, movie.category],
						[]
					).map((category) => (
						<li key={category} onClick={() => handleFilter(category)}>
							{category}
						</li>
					))}
					</ul>
				</div>
				<div className=" col-9">
					<div className="row">

						{movieAppear.map(movie => (
							<div className="col-3">
								<div className="card" key={movie.name}>
									<img className="card-img-top" src={movie.IMG}></img>
									<div class="card-body">
										<h5 class="card-title">{movie.name}</h5>
										<p>Năm: {movie.year}</p>
										<p>Loại: {movie.category}</p>
										<p>Điểm: {movie.score}</p>
										<Link to ="/Detail" class="btn btn-primary">Đánh giá</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>


			</div>
		</div>

	);
};




export default Home;