import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Home.css";
import bgImage from "./assets/NFTree10.png"
import { useTranslation } from "react-i18next";

const Home = ({ lang }) => {
	const { t } = useTranslation();

	return (
		<div
		style={{
			height: "100vh",
			width: "100vw",
			background: `url(${bgImage})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		}}
		>
			<div id="home"></div>
			<Grid
				container
				spacing={2}
				sx={{
					// border: '2px solid red',
					height: { xs: "70vh", sm: "100vh" },
					zIndex: 1,
					display: "flex",
					alignItems: "center",
					bgImage: `url(${bgImage})`,
				}}
				id="homeContainer">
				<Grid
					item
					xs={12}
					sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}></Grid>
				<Grid
					item
					xs={12}
					sm={5}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Box
						sx={{
							width: { xs: "90%", sm: "90%", lg: "70%" },
							textAlign: "start",
						}}
						className="homeTextBox">
						<Typography
							variant="h1"
							gutterBottom
							className="homeHead"
							sx={{
								fontWeight: "bold",
								color: "black",
							}}>
							NFTree
						</Typography>
						<Typography
							variant="body1"
							className="homeDesc"
							gutterBottom
							sx={{
								textAlign: "justify",
								color: "white",
								marginBottom: '2rem'
							}}>
							Welcome to NFTree, the platform that provides a new way to save the environment and reward investors at the same time. With our NFTokens, you can exercise your social responsibility without compromising your investment goals, and we can continue planting more trees around the globe.
						</Typography>

						
							<Link
								style={{ marginTop: '1rem' }}
								className="launchBtn"
								to="https://nftree.io"
								target="_blank">
								Explore
							</Link>
							{/* :
							<Link
								className="launchBtn"
								to="https://drive.google.com/file/d/1ihc7Nzc2lR99R-0su-eQ0bhRQ4ELUnV2/view?usp=sharing"
								target="_blank">
								{t("homeBtn")}
							</Link> */}
						
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}></Grid>
			</Grid>
		</div>
	);
};

export default Home;
