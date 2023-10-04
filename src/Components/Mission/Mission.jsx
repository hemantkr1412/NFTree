import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardMedia } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "./assets/about.png";
import "./Mission.css";

const Mission = () => {
	useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 400,
		});
	}, []);
	return (
		<>
			<div id="about"></div>

			<Grid
				container
				spacing={{ xs: 3, md: 3 }}
				justifyContent="center"
				className="mission"
				sx={{ mb: 5 }}>
				<Grid item xs={12} sm={2} md={1} lg={2}
					sx={{ display: { xs: "none", md: "block" } }}>
				</Grid>
				<Grid item xs={12} sm={6} md={5} lg={4}
					className="imgContainer"
					sx={{
						display: {
							xs: "block !important",
							sm: "none !important",
						},
					}}>
					<Typography
						variant="h3"
						gutterBottom
						sx={{
							fontWeight: "bold",
							mb: 4,
							display: { xs: "block", sm: "none" },
							textAlign: "center",
							color: "black",
						}}
						className="aboutHead">
						The Impact and Mission of NFTree
					</Typography>
					<Card
						data-aos="fade-up"
						className="aboutImgContainer">
						<CardMedia
							component="img"
							sx={{
								objectFit: "contain",
							}}
							image={about} 
							alt="Image Alt Text"
							className="aboutImg"

						/>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={5} lg={4}>
					<Box sx={{ textAlign: "start" }} className="aboutBox">
						<Typography
							variant="h3"
							gutterBottom
							sx={{
								fontWeight: "bold",
								mb: 4,
								display: { xs: "none", sm: "block" },
								textAlign: "start",
								color: "black",
							}}
							className="aboutHead">
							The Impact and Mission of NFTree
						</Typography>
						<Typography
							sx={{
								typography: "body1",
								lineHeight: 1.8,
								textAlign: "justify",
								marginRight: "0",
								color: "black",
							}}
							gutterBottom
							id="aboutInfo">
							The mission of NFTree is to provide a sustainable solution for investors to impact the environment positively while earning income. Our goal is to create the world's largest sustainable forest using NFTokens and to be a platform that cultivates a sense of responsibility among the masses towards the environment.
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} sm={6} md={5} lg={4}
					className="imgContainer"
					sx={{
						display: { xs: "none", sm: "block" }
					}}>
					<Card
						sx={{ boxShadow: "none" }}
						data-aos="fade-up"
						className="aboutImgContainer">
						<CardMedia
							component="img"
							// height="80%"
							image={about}
							sx={{ objectFit: "contain" }}
							alt="Image Alt Text"
							className="aboutImg"
						/>
					</Card>
				</Grid>

				<Grid item xs={12} sm={2} md={1} lg={2}
					sx={{ display: { xs: "none", md: "block" } }}>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={{ xs: 3, md: 3 }}
				justifyContent="center">
				<Grid item xs={2}
					sx={{ display: { xs: "none", lg: "block" } }}>
				</Grid>
				<Grid
					item
					container
					xs={12}
					lg={8}
					spacing={3}
					className="impactDiv">
					<Grid item xs={12} sm={3} lg={4} spacing={8}>
						<Typography variant="h4" gutterBottom>
							Environmental Impact
						</Typography>
						<ul >
							<li>Reducing carbon footprint</li>
							<li>Creating a sustainable forest ecosystem</li>
							<li>Restoring natural habitats</li>
						</ul>
					</Grid>
					<Grid item xs={12} sm={3} lg={4} spacing={8}>
						<Typography variant="h4" gutterBottom>
							Social Impact
						</Typography>
						<ul>
							<li>Creating job opportunities in rural areas</li>
							<li>Encouraging environmental consciousness</li>
							<li>Fostering a sense of community</li>
						</ul>
					</Grid>
					<Grid item xs={12} sm={3} lg={4} spacing={8}>
						<Typography variant="h4" gutterBottom>
							Economic Impact
						</Typography>
						<ul>
							<li>Providing investment opportunities</li>
							<li>Contributing to sustainable development</li>
							<li>Creating a source of income for the farmers</li>
						</ul>
					</Grid>
				</Grid>
				<Grid
					item
					xs={2}
					sx={{ display: { xs: "none", lg: "block" } }}></Grid>
			</Grid>
		</>
	);
};

export default Mission;
