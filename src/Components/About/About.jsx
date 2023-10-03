import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardMedia } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg1 from "./assets/15.png";
import aboutImg2 from "./assets/about2.png";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = ({lang}) => {
	const { t } = useTranslation();
	useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 400,
		});
	}, []);
	return (
		<>
			{/* ABOUT SECTION */}

			<div id="about"></div>

			<Grid
				container
				spacing={{ xs: 3, md: 3 }}
				justifyContent="center"
				className="mission"
				sx={{ mb: 5 }}>
				<Grid
					item
					xs={12}
					sm={2}
					md={1}
					lg={2}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>

				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={4}
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
						{t("whoWeAre.heading")}
					</Typography>
					<Card
						data-aos="fade-up"
						className="aboutImgContainer">
						<CardMedia
							component="img"
							sx={{
								objectFit: "contain",
							}}
							image={aboutImg1}
							// sx={{ objectFit: "cover"}} 
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
								textAlign: lang === "en" ? "start" : "right",
								color: "black",
							}}
							className="aboutHead">
							The Impact and Mission of NFTree
						</Typography>
						<Typography
							sx={{
								typography: "body1",
								lineHeight: 1.8,
								textAlign: lang === "en" ? "justify" : "right",
								marginRight: "0",
								color: "black",
							}}
							gutterBottom
							id="aboutInfo">
							The mission of NFTree is to provide a sustainable solution for investors to impact the environment positively while earning income. Our goal is to create the world's largest sustainable forest using NFTokens and to be a platform that cultivates a sense of responsibility among the masses towards the environment.
						</Typography>
					</Box>
				</Grid>

				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={5}
					className="imgContainer"
					sx={{
						// border: '2px solid red',
						display: { xs: "none", sm: "block" },
					}}>
					<Card
						sx={{ boxShadow: "none" }}
						data-aos="fade-up"
						className="aboutImgContainer">
						<CardMedia
							component="img"
							// height="80%"
							image={aboutImg1}
							sx={{ objectFit: "contain"}}
							alt="Image Alt Text"
							className="aboutImg"
						/>
					</Card>
				</Grid>

				<Grid
					item
					xs={12}
					sm={2}
					md={1}
					lg={2}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>
			</Grid>

			{/* MISSION SECTION */}

			{/* <Grid
				container
				spacing={{ xs: 3, md: 3 }}
				justifyContent="center"
				className="mission"
			>
				<Grid
					item
					xs={12}
					sm={2}
					md={1}
					lg={2}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>

				<Grid
					item
					xs={12}
					sm={6}
					md={5}
					lg={4}
					className="imgContainer">
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
						{t("ourMission.heading")}
					</Typography>
					<Card
						sx={{ boxShadow: "none" }}
						data-aos="fade-up"
						className="missionImgContainer">
						<CardMedia
							component="img"
							// height="80%"
							image={aboutImg2}
							sx={{ objectFit: "cover" }}
							alt="Image Alt Text"
							className="missionImg"
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
								color: "black",
								textAlign: lang === "en" ? "justify" : "right",
							}}
							className="aboutHead">
							{t("ourMission.heading")}
						</Typography>
						<Typography
							sx={{
								typography: "body1",
								lineHeight: 1.8,
								textAlign: lang === "en" ? "justify" : "right",
								marginLeft: "0",
								color: "black",
							}}
							gutterBottom
							id="aboutInfo">
							{t("ourMission.text")}
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={2}
					md={1}
					lg={2}
					sx={{ display: { xs: "none", md: "block" } }}></Grid>
			</Grid> */}
		</>
	);
};

export default About;
