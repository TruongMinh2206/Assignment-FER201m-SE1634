import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";
const MovieCard = ({ item }) => {
	return (
		<Link className="card_wrap" to={`/detail/${item.movieId}/${item?.id}`}>
			<div className="card">
				<div className="card_img">
					<img src={item?.IMG} alt="anh" />
				</div>
				<div className="card_title">{item?.des}</div>
				<div className="card_title">Albums: {item?.movieId}</div>
			</div>
		</Link>
	);
};

export default MovieCard;
