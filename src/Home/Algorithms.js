import React, { useEffect, useState } from "react";
import { contest } from "./Leetcode.contest";
import { problems } from "./Leetcode.problems";

function Algorithms() {
	var [data, setData] = useState(problems);
	var [activeButton, setActiveButton] = useState("Problems");

	useEffect(() => {}, [data, activeButton]);

	return (
		<div style={{ textAlign: "center" }}>
			<ul className="NavBar" style={{ textAlign: "center" }}>
				<div>
					<span
						style={{
							display: "inline-block",
							color: "white",
							fontSize: "20pt",
							padding: "12px",
						}}
					>
						Algorithms
					</span>
					<span>
						<li
							style={{
								fontSize: "20pt",
								float: "right",
								borderLeft: "1px solid #bbb",
							}}
						>
							<a href="/">Home</a>
						</li>
					</span>
				</div>
			</ul>
			<hr />
			<br />
			<div style={{ display: "inline-block" }}>
				<div
					style={{ textAlign: "left" }}
					dangerouslySetInnerHTML={{ __html: data }}
				/>
			</div>
		</div>
	);
}

export default Algorithms;
