import React from "react";
import IT_Service_Card from "./IT_Service_Card.jsx";
import Grid from "@mui/material/Grid";
import "./IT_Services.css";
import { useTranslation } from "react-i18next";
import vector1 from "./assets/img-1.png";
import vector2 from "./assets/img-2.png";
import vector3 from "./assets/img-3.png";
import vector4 from "./assets/img-4.png";
import vector5 from "./assets/img-5.png";
import vector6 from "./assets/img-6.png";
const IT_Services = () => {
	const { t } = useTranslation();
	const ITCardData = [
		{
			id: 1,
			img: vector1,
			title: "How NFTokens Work",

			desc: t(
				"Each NFToken represents a specific tree planted in a designated location. NFTree's partner tree-planting organizations track and manage the trees, providing updates on growth and development. The value of an NFT increases with the growth of the tree it represents, creating economic benefits for investors."
			),
		},
		{
			id: 2,
			img: vector2,
			title: t(
				"The Importance of Tree Plantation"
			),
			desc: t(
				"Tree plantation is essential for our planet. Trees are one of the most effective natural solutions for mitigating carbon emissions. They remove carbon dioxide from the atmosphere and replace it with oxygen, promoting a healthy environment for all living things."
			),
		},
		{
			id: 3,
			img: vector3,
			title: t(
				"Tracking NFTokens on NFTree"
			),
			desc: t("NFTree offers a user-friendly dashboard that tracks the progress of the trees planted with each NFT. This feature enhances transparency and keeps investors informed about the condition of their trees. Investors can also contribute to the care and maintenance of the tree through a customized donation option."),
		},

	];
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
						{ITCardData.map((data, id) => {
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
						})}
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

export default IT_Services;
