import React from "react";
import AboutCard from "./AboutCard";
import Grid from "@mui/material/Grid";
import { aboutCardData } from './aboutCardData'
import un8 from './assets/un8.jpg';
import un9 from './assets/un9.jpg';
import un11 from './assets/un11.jpg';
import un13 from './assets/un13.jpg';
import un15 from './assets/un15.jpg';
import "./About.css";

const About = () => {
	return (
		<div style={{ padding: "1rem 0 4rem" }}>
			<div id="about"></div>
			<div className="aboutDiv">
				<h1>What is NFTree?</h1>
				<p
					style={{ marginTop: "1rem" }}
					className="aboutDesc">
					A blockchain-based digital monitoring, reporting, and verification platform, NFTree is dedicated to reforesting open spaces within and beyond urban landscapes. Empowering stakeholders with  a secure and traceable channel for expressing their eco-consciousness, the platform leverages NFT technology to enhance the transparency and traceability of donation campaigns, specifically targeting mitigation of adverse effects caused by human activities on the environment.
				</p>
				<p style={{ marginBottom: "3rem" }}
					className="aboutDesc">
					NFTree is aligned with the <b>United Nations Sustainable Development Goals (SDGs)</b>, demonstrating the commitment to addressing global challenges and contributing to the broader agenda of creating a more inclusive, equitable, and sustainable world.
				</p>
				<div className="unImages">
					<img src={un8} alt="" />
					<img src={un9} alt="" />
					<img src={un11} alt="" />
					<img src={un13} alt="" />
					<img src={un15} alt="" />
				</div>
				<Grid
					container
					spacing={{ xs: 1, sm: 3 }}
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
										<Grid item xs={10} sm={4} spacing={3}
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
