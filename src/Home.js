import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContent } from "./App";
import User from "./user.json";
import Movie from "./Movie.json";
import MovieCard from "./MovieCard";

import "./style.css";


const Home = () => {
	// Lấy dữ liệu từ user.json và lưu vào state user

	// Lấy dữ liệu từ Movie.json và lưu vào state movieAppear
	const [movieAppear, setMovieAppear] = useState(Movie);

	// Lấy tham chiếu đến ô nhập liệu search
	const refSearch = useRef();
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
		const searchVal = refSearch.current.value
		const searchResult = movieAppear.filter(movie => movie.name.toLowerCase().startsWith(searchVal.toLowerCase()))
		setMovieAppear(searchResult)
	}
	const handleFilter = (category) => {
		// Nếu thể loại được chọn trùng với thể loại đã chọn trước đó,
		// không cần cập nhật lại danh sách phim hiển thị
		if (category === "all") {
			setMovieAppear(Movie);
		  }else{
		if (category === selectedCategory) {
			return;
		}

		// Lọc danh sách phim theo thể loại được chọn
		const filteredMovies = Movie.filter((movie) => movie.category === category);
		setMovieAppear(filteredMovies);
		setSelectedCategory(category);
	}};


	return (

		<div className="home">
			<div className="home_wrap">
				<div className="home_header">
					<div>
						<h4>PHIM HAY</h4>

					</div>
					<div>
						<h5>Trang chủ</h5>

					</div>
					<form className="home_form" >
						<input ref={refSearch} placeholder='Enter Name to search' />
						<button onClick={handleSearch}>Search</button>
						<button onClick={handleSearch}>Đăng nhập</button>
						<button onClick={handleSearch}>Đăng kí</button>
					</form>
				</div>
				<div className="albums_category">
					<h4>Thể Loại</h4>
					<button onClick={() => handleFilter("all")}>Tất cả</button>
					{Movie.reduce(
						(categories, movie) =>
							categories.includes(movie.category)
								? categories
								: [...categories, movie.category],
						[]
					).map((category) => (
						<button key={category} onClick={() => handleFilter(category)}>
							{category}
						</button>
					))}
				</div>
				<div className="albums_items">
					<div className="albums_items_wrap">

						{movieAppear.map(movie => (
							<div className="albums_items_wrap1" key={movie.name}>
								<img className="albums_img" src={movie.IMG}></img>
								<h3>Tên: {movie.name}</h3>
								<h3>Năm: {movie.year}</h3>
								<h3>Loại: {movie.category}</h3>
								<h3>Điểm: {movie.score}</h3>
								<button>Đánh giá</button>
							</div>

						))}
					</div>
				</div>
			</div>
		</div>
	);
};




export default Home;
