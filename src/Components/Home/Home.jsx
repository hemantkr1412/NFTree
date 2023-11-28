import React from "react";
import {Box,Grid,Typography} from "@mui/material";
import homeBg from "./assets/homeBg.png"
import "./Home.css";

const Home = () => {
	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				background: `url(${homeBg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div id="home"></div>
			<Grid
				container
				spacing={2}
				sx={{
					height: { xs: "70vh", sm: "100vh" },
					zIndex: 1,
					display: "flex",
					alignItems: "center",
					bgImage: `url(${homeBg})`,
				}}
				id="homeContainer">
				<Grid item xs={12} sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}>
				</Grid>
				<Grid item sm={12} md={5}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							width: { xs: "90%", sm: "90%", lg: "80%" },
							textAlign: "start",
						}}
						className="homeTextBox">
						<Typography
							variant="h2"
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
								color: "black",
								fontWeight:'600',
								marginBottom: '2rem'
							}}>
							Welcome to NFTree, where digital innovation meets environmental stewardship. As you explore the platform, you'll discover a dynamic ecosystem that fosters contribution to a greener planet securely and transparently. From tree counting to carbon sequestration, NFTree provides a comprehensive, real-time view of your reforestation impact. 
						</Typography>

						{/* <Link
							style={{ marginTop: '1rem' }}
							className="exploreBtn"
							to="https://nftree.io"
							target="_blank">
							Explore
						</Link> */}
					</Box>
				</Grid>
				<Grid item xs={12} sm={1}
					sx={{ display: { xs: "none", sm: "block" } }}>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
