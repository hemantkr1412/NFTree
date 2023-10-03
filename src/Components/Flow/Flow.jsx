import React from "react";
// import IT_Service_Card from "../Solutions/IT_Services/IT_Service_Card.jsx";
import Grid from "@mui/material/Grid";
import "./Flow.css";
import { useTranslation } from "react-i18next";
import plantation from "./assets/plantation.png";
import blockchain from "./assets/blockchain.png";
import nft from "./assets/nft.png";
// import BlockChainVector from "./assets/blockchainImage.png"
// import NFTVector from "./assets/16.png"
// import TreeVector from "./assets/19.png";

const Flow = () => {
	const { t } = useTranslation();
	// const ITCardData = [
	// 	{
	// 		id: 1,
	// 		img: plantation,
	// 		title: "How NFTokens Work",

	// 		desc: t(
	// 			"Each NFToken represents a specific tree planted in a designated location. NFTree's partner tree-planting organizations track and manage the trees, providing updates on growth and development. The value of an NFT increases with the growth of the tree it represents, creating economic benefits for investors."
	// 		),
	// 	},
	// 	{
	// 		id: 2,
	// 		img: blockchain,
	// 		title: t(
	// 			"The Importance of Tree Plantation"
	// 		),
	// 		desc: t(
	// 			"Tree plantation is essential for our planet. Trees are one of the most effective natural solutions for mitigating carbon emissions. They remove carbon dioxide from the atmosphere and replace it with oxygen, promoting a healthy environment for all living things."
	// 		),
	// 	},
	// 	{
	// 		id: 3,
	// 		img: nft,
	// 		title: t(
	// 			"Tracking NFTokens on NFTree"
	// 		),
	// 		desc: t("NFTree offers a user-friendly dashboard that tracks the progress of the trees planted with each NFT. This feature enhances transparency and keeps investors informed about the condition of their trees. Investors can also contribute to the care and maintenance of the tree through a customized donation option."),
	// 	},

	// ];
	return (
		<div
			style={{
				paddingTop: "1rem",
				paddingBottom: "4rem",
				marginBottom: '4rem'
			}}>
			<div id="about"></div>
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
						{/* {ITCardData.map((data, id) => {
							return (
								<Grid
									item
									xs={6}
									md={4}
									className="serviceCardContainer"
									key={id}>
									<IT_Service_Card
										key={id}
										title={data.title}
										desc={data.desc}
										img={data.img}
									/>
								</Grid>
							);
						})} */}
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
