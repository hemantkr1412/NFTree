import React from "react";
import AboutCard from "./AboutCard";
import Grid from "@mui/material/Grid";
import { aboutCardData } from './aboutCardData'
import "./About.css";

const About = () => {
	return (
		<div style={{ padding: "1rem 0 4rem" }}>
			<div id="about"></div>
			<div className="aboutDiv">
				<h1>What is NFTree?</h1>
				<p
					style={{
						marginBottom: "3rem",
						marginTop: "1rem",
						width: "30%",
						textAlign: "justify",
					}}
					className="aboutDesc">
					NFTree is a platform for investing in tree plantations through NFTokens. These tokens represent ownership in a tree. As the tree grows, so does the value of the token. This means that NFTree provides both an economic and environmental benefit.
				</p>
				<Grid
					container
					spacing={{ xs:1, sm: 3 }}
					justifyContent="center">
					<Grid item xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}>
					</Grid>
					<Grid item container xs={12} lg={8} spacing={3}
						className="aboutCardContainerDiv">
						{
							aboutCardData.map((data, id) => {
								return (
									<>
										<Grid item xs={10} sm={4} spacing={3} sx={{
											// border: '2px solid blue'
										}}
											key={id}
											className="cardsDiv">
											<AboutCard
												key={id}
												title={data.title}
												desc={data.desc}
												img={data.img}
											/>
										</Grid>
									</>
								);
							})
						}
					</Grid>
					<Grid item xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default About;
