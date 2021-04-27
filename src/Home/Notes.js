import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Leetcode from "./Leetcode";

function Notes() {
	return (
		<div>
			<div className="search-container">
				<div className="search-item">
					<Link to="/Leetcode">Leetcode</Link>
				</div>
				<div className="search-item">
					<Link to="/Algorithms">Algorithms</Link>
				</div>
				<div className="search-item">hi</div>
				<div className="search-item">hi</div>
				<div className="search-item">hi</div>
			</div>

			<hr
				style={{
					height: "8px",
					backgroundColor: "black",
				}}
			/>
		</div>
	);
}

export default Notes;
