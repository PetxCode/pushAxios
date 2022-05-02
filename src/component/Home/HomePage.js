import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
	const [holder, setHolder] = useState([]);

	const getData = async () => {
		const options = {
			method: "GET",
			url: "https://movies115.p.rapidapi.com/cartaz",
			headers: {
				"X-RapidAPI-Host": "movies115.p.rapidapi.com",
				"X-RapidAPI-Key": "b24e4989e1msh405e31e59e89464p136faajsn15c77a23d5ff",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				// console.log(response.data);
				setHolder(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			{holder?.map((props) => (
				<div>{props.title}</div>
			))}
		</div>
	);
};

export default HomePage;
