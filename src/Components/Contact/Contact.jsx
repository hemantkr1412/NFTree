import React, { useState, useEffect} from "react";
import {
	Grid,
	Typography,
	Box,
	FormControl,
	Input,
	InputLabel,
	Button,
	Snackbar,
	IconButton
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import AOS from "aos";
import "./Contact.css";

const Contact = () => {
	const formDetail = [
		{
			label: "Name",
			placeholder: "Andrea",
			key: "Name",
		},
		{
			label: "Email",
			placeholder: "andrea@gmail.com",
			key: "Email",
		},
		{
			label: "Message",
			placeholder: "Your message",
			key: "Message",
		},
	];
	const [dataAos, setDataAos] = useState("");
	const [open, setOpen] = React.useState(false);
	const [inputDetails, setInputDetails] = useState({
		Name: "",
		Email: "",
		Purpose: "",
		Message: "",
	});

	const handleToClose = (event, reason) => {
		if ("clickaway" == reason) return;
		setOpen(false);
	};

	const inputEvent = (e) => {
		const name = e.target.name;
		const val = e.target.value;
		setInputDetails({ ...inputDetails, [name]: val });
	};

	const submitForm = (event) => {
		event.preventDefault();

		const config = {
			SecureToken: "26802cb0-6999-4fb5-8d33-b75d9d1c7736",
			To: "hello@beimagine.tech",
			From: "hello@beimagine.tech",
			Subject: "Abaad Alkhayal Contact Form",
			Body: `
            Name: ${inputDetails.Name}<br>
            Email: ${inputDetails.Email}<br>
            Purpose: ${inputDetails.Purpose}<br>
            Message: ${inputDetails.Message}
          `,
		};
		if (window.Email) {
			window.Email.send(config)
				.then((data) => {
					setOpen(true);
					setInputDetails({
						Name: "",
						Email: "",
						Purpose: "",
						Message: "",
					});
				})
				.catch((error) => {
					setOpen(true);
				});
		}
	};

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 400,
		});
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth < 400) {
				setDataAos("fade-up");
			} else {
				setDataAos("zoom-in-left");
			}
		};
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div id="contact"></div>
			<Typography
				variant="h5"
				gutterBottom
				sx={{
					// border: '2px solid red',
					display: { xs: "block", md: "none" },
					fontWeight: "bold",
					textAlign: "center",
					fontSize: "2rem",
				}}
				id="contactHead">
				Feel Free to reach out for further details
			</Typography>
			<Grid
				container
				spacing={{ xs: 3, md: 3 }}
				justifyContent="center"
				sx={{ p: 3 }}
				className="contactDiv">
				<Grid
					item
					xs={1}
					sx={{ display: { xs: "none", lg: "block" } }}></Grid>
				<Grid item xs={12} sm={6} sx={{ p: 5 }} id="contactContainer">
					<Box sx={{ textAlign: "start" }}>
						<Typography
							variant="h4"
							gutterBottom
							sx={{
								fontWeight: "bold",
								display: { xs: "none", md: "block" },
							}}>
							Feel Free to reach out for further details
						</Typography>

						<Box sx={{ mt: 4 }}>
							<p>Email Address</p>
							<a
								href="mailto: hello@beimagine.tech"
								className="contactLink">
								hello@beimagine.tech
							</a>
						</Box>
						<Box sx={{ mt: 4 }}>
							<p>Address</p>
							<p className="contactInfo">
								B-8  First Floor, Multan Nagar Paschim Vihar Delhi,
								North West DL-110063
							</p>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={4}
					className="formOuterDiv">
					<Box component="div" className="formDiv" >
						{/* data-aos={dataAos} */}
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								fontWeight: "bold",
								marginLeft: "2rem",
								marginTop: "1rem",
								color: "black",
							}}>
							Contact Us
						</Typography>
						<form onSubmit={submitForm}>
							{formDetail.map((elem, id) => {
								{
									/* console.log(elem) */
								}
								return (
									<FormControl
										variant="standard"
										className="inputDiv"
										key={id}
										onSubmit={submitForm}>
										<InputLabel
											htmlFor="component-simple"
											className="inputLabel">
											{elem.label}
										</InputLabel>

										<Input
											id="component-simple"
											placeholder={elem.placeholder}
											className="input"
											onChange={inputEvent}
											name={elem.label}
											value={inputDetails[elem.key]}
										/>
									</FormControl>
								);
							})}
							<Button
								type="submit"
								variant="contained"
								className="formBtn"
								sx={{ margin: "1rem 2rem 0 0" }}>
								Send
							</Button>
						</form>
					</Box>
				</Grid>
				<Grid
					item
					xs={1}
					sx={{ display: { xs: "none", lg: "block" } }}></Grid>
			</Grid>

			<Snackbar
				anchorOrigin={{
					horizontal: "center",
					vertical: "top",
				}}
				open={open}
				autoHideDuration={1500}
				// message={t("formSubmittedSuccessfully")}
				sx={{
					"& .MuiSnackbarContent-root": {
						backgroundColor: "#4caf50",
						color: "#fff",
					},
				}}
				onClose={handleToClose}
				action={
					<React.Fragment>
						<IconButton
							size="small"
							aria-label="close"
							color="inherit"
							onClick={handleToClose}>
							<CancelIcon />
						</IconButton>
					</React.Fragment>
				}
			/>
		</>
	);
};

export default Contact;
