import React, { useEffect } from "react";
import { Grid, Typography, Box, Card, CardMedia } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "./assets/about.png";
import howItWorks1 from './assets/howItWorks-1.png'
import howItWorks2 from './assets/howItWorks-2.png'
import howItWorks3 from './assets/howItWorks-3.jpg'
import "./Mission.css";

const steps = [
	{
		img: howItWorks1,
		title: "Minting NFT and Generating QR code",
	},
	{
		img: howItWorks2,
		title: "Saplings are planted against it",
	},
	{
		img: howItWorks3,
		title: "Regular monitoring and sending reports to donors",
	},
];

const Mission = () => {
	useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 400,
		});
	}, []);
	
	return (
		<>
			<div id="mission"></div>

			<Grid
				container
				spacing={{ xs: 3, md: 3 }}
				justifyContent="center"
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
						className="missionHead">
						The Mission
					</Typography>
					<Card
						data-aos="fade-up"
						className="missionImgContainer">
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
					<Box sx={{ textAlign: "start" }} className="missionBox">
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
							className="missionHead">
							The Mission
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
							At NFTree, we aim to pioneer a transformative intersection of technology, environmental sustainability, and community engagement and are committed to foster positive change, thus promoting a healthier planet.
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
						className="missionImgContainer">
						<CardMedia
							component="img"
							// height="80%"
							image={about}
							sx={{ objectFit: "contain" }}
							alt="Image Alt Text"
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
			>
				<Grid
					item
					xs={1}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>
				<Grid
					item
					container
					xs={10}
					// spacing={3}
					sx={{ mx: window.innerWidth < 900 && 'auto' }}
					className="howItWorksContainer"
				>

					<Typography
						variant="h2"
						gutterBottom
						className="howItWorksHead"
						sx={{ margin: '5rem auto' }}>
						How it works?
					</Typography>
					<Grid
						container
						columns={20}
						spacing={{ xs: 3, md: 4 }}
						className='steps'
						sx={{
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						{
							steps.map((step, index) => {
								return (
									<Grid
										item
										xs={12}
										sm={10}
										md={5}
										sx={{ textAlign: "center" }}
										key={index}
									>
										<img src={step.img} alt="" style={{
											height: '10rem',
											marginBottom: '10px'
										}} />
										<Typography variant="h1">{index + 1}</Typography>
										<Typography variant="h5" sx={{ my: 2 }}>{step.title}</Typography>
										<Typography variant="body1">{step.desc}</Typography>
									</Grid>
								)
							})
						}
					</Grid>
				</Grid>
				<Grid
					item
					xs={1}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>
			</Grid>

			{/* <Grid
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
			</Grid> */}
		</>
	);
};

export default Mission;
