import React from "react";
import Grid from "@mui/material/Grid";
import "./Flow.css";
import plantation from "./assets/plantation.png";
import blockchain from "./assets/blockchain.png";
import nft from "./assets/nft.png";
import rightArrow from "./assets/right-arrow.jpg";
import downArrow from "./assets/down-arrow.jpg";

const Flow = () => {
	return (
		<div
			style={{
				padding: "1rem 0 4rem",
				marginBottom: '4rem'
			}}>
			<div className="aboutDiv">
				<h1>Title (Flow Diagram)</h1>
				<p
					style={{
						marginBottom: "3rem",
						marginTop: "1rem",
						width: "30%",
						textAlign: "center",
					}}
					className="aboutDesc">
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
						className="aboutCardContainerDiv">
						<div className="container">
							<div className="box">
								<img src={plantation} style={{ width: "100%" }} />
								<h1>Plantation</h1>
							</div>

							<img src={rightArrow} alt="" style={{ height: '3rem' }} className="rightArrow"/>
							<img src={downArrow} alt="" style={{ height: '3rem' }} className="downArrow"/>

							<div className="box">
								<img src={blockchain} style={{ width: "100%" }} />
								<h1>Blockchain Network</h1>
							</div>

							<img src={rightArrow} alt="" style={{ height: '3rem' }} className="rightArrow"/>
							<img src={downArrow} alt="" style={{ height: '3rem' }} className="downArrow"/>

							<div className="box">
								<img src={nft} style={{ width: "100%" }}/>
								<h1>NFT</h1>
							</div>
						</div>
					</Grid>
					<Grid
						item
						xs={2}
						sx={{ display: { xs: "none", lg: "block" } }}></Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Flow;
