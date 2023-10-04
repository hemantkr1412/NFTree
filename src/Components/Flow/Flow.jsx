import React from "react";
import Grid from "@mui/material/Grid";
import "./Flow.css";
import plantation from "./assets/plantation.png";
import blockchain from "./assets/blockchain.png";
import nft from "./assets/nft.png";

const Flow = () => {
	return (
		<div
			style={{
				paddingTop: "1rem",
				paddingBottom: "4rem",
				marginBottom: '4rem'
			}}>
			<div className="serviceDiv">
				<h1>Title (Flow Diagram)</h1>
				<p
					style={{
						marginBottom: "3rem",
						marginTop: "1rem",
						width: "30%",
						textAlign: "center",
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
						<div className="container">
							<div className="box">
								<img src={plantation} style={{ width: "100%" }} />
								<h1>Plantation</h1>
							</div>

							<img src="/arrow.jpg" alt="" style={{ height: '3rem' }} />

							<div className="box">
								<img src={blockchain} style={{ width: "100%" }} />
								<h1>Blockchain Network</h1>
							</div>

							<img src="/arrow.jpg" alt="" style={{ height: '3rem' }} />

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
