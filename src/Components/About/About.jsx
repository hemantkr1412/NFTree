import React from "react";
import AboutCard from "./AboutCard";
import Grid from "@mui/material/Grid";
import { aboutCardData } from './aboutCardData'
import "./About.css";

const About = () => {
	return (
		<div
			style={{
				paddingTop: "1rem",
				paddingBottom: "4rem",
			}}>
			<div id="about"></div>
			<div className="serviceDiv">
				<h1>What is NFTree?</h1>
				<p
					style={{
						marginBottom: "3rem",
						marginTop: "1rem",
						width: "30%",
						textAlign: "justify",
					}}
					className="serviceDesc">
					NFTree is a platform for investing in tree plantations through NFTokens. These tokens represent ownership in a tree. As the tree grows, so does the value of the token. This means that NFTree provides both an economic and environmental benefit.
				</p>
				<Grid
					container
					spacing={{ xs: 3, md: 3 }}
					justifyContent="center">
					<Grid
						item
						xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}></Grid>
					<Grid
						item
						container
						xs={12}
						lg={8}
						spacing={3}
						className="serviceCardContainerDiv">
						{aboutCardData.map((data, id) => {
							return (
								<Grid item xs={6} md={4}
									className="serviceCardContainer"
									key={id}>
									<AboutCard
										key={id}
										title={data.title}
										desc={data.desc}
										img={data.img}
									/>
								</Grid>
							);
						})}
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
