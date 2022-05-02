import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import pix from "./images.png";

const Header = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<LogoRouter to="/">
						<Logo src={pix} />
					</LogoRouter>

					<Navigation>
						<Avatar src={require("./1.jpeg")} />
						<Nav to="login">Login</Nav>
						<Nav to="register">Log Out</Nav>
					</Navigation>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Header;

const LogoRouter = styled(Link)``;

const Nav = styled(NavLink)`
	text-decoration: none;
	color: white;
	padding: 10px 20px;
	border-radius: 3px;
	transition: all 350ms;
	transform: scale(1);
	margin: 0 5px;

	&.active {
		background-color: rgba(255, 255, 255, 0.5);
	}

	:hover {
		transform: scale(1.03);
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.3);
	}
`;

const Avatar = styled.img`
	margin: 0 20px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	object-fit: cover;
	background-color: orange;
`;

const Navigation = styled.div`
	display: flex;
	margin-right: 20px;
	display: flex;
	align-items: center;
`;

const Logo = styled.img`
	margin: 0 20px;
	width: 180px;
	height: 60px;
	object-fit: cover;
	border-radius: 4px;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		transform: scale(1.02);
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.3);
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Container = styled.div`
	width: 100%;
	height: 100px;
	background-color: #004080;
	color: white;
`;
