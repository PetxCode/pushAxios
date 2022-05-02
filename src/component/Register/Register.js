import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Register = () => {
	const formSchema = yup.object().shape({
		userName: yup.string().required("This field must be filled"),
		email: yup.string().email().required("This field must be filled"),
		password: yup.string().required("This field must be filled"),
		confirm: yup.string().oneOf([yup.ref("password"), null]),
	});

	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const mySubmission = handleSubmit(async (data) => {
		console.log(data);

		reset();
	});

	return (
		<Container>
			<Wrapper>
				<Card onSubmit={mySubmission}>
					<Holder>
						<Image />
						<ImageInput />
						<InputLabel>Upload your Image</InputLabel>
					</Holder>

					<InputHolder>
						<Label>User Name</Label>
						<div style={{ color: "red" }}>
							{errors.userName && errors?.userName.message}
						</div>
						<Input placeholder="User Name" {...register("userName")} />

						<Label>Email</Label>
						<div style={{ color: "red" }}>
							{errors.email && errors?.email.message}
						</div>
						<Input placeholder="Email" {...register("email")} />

						<Label>Password</Label>
						<div style={{ color: "red" }}>
							{errors.password && errors?.password.message}
						</div>
						<Input placeholder="Password" {...register("password")} />

						<Label>Confirm Password</Label>
						<div style={{ color: "red" }}>
							{errors.confirm && errors?.confirm.message}
						</div>
						<Input placeholder="Confirm Password" {...register("confirm")} />
					</InputHolder>
					<Button type="submit">Register</Button>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Register;

const Button = styled.button`
	text-decoration: none;
	outline: none;
	border: 0;
	color: white;
	padding: 16px 60px;
	border-radius: 3px;
	transition: all 350ms;
	transform: scale(1);
	background-color: #004080;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 12px;

	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`;

const InputHolder = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	margin-bottom: 40px;
`;

const InputLabel = styled.label`
	text-decoration: none;
	color: white;
	padding: 16px 20px;
	border-radius: 3px;
	transition: all 350ms;
	transform: scale(1);
	background-color: #004080;

	:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`;

const Input = styled.input`
	border: 1px solid silver;
	outline: none;
	width: 300px;
	height: 40px;
	margin-top: 10px;
	padding-left: 10px;
`;

const Label = styled.label`
	font-weight: bold;

	margin-top: 15px;
`;

const ImageInput = styled.input`
	display: none;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: orange;
	object-fit: cover;
	margin-bottom: 20px;
`;

const Holder = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 40px;
`;

const Card = styled.form`
	width: 500px;
	min-height: 300px;
	height: 100%;
	padding: 30px 0;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin: 50px 0;
`;

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 100px);
	height: 100%;
`;
