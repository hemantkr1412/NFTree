import React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.webp';
import './Join.css'

const Join = () => {
    const { t } = useTranslation();

    const joinData = [
        {
            img: img1,
            title: "Become a Subscriber",
            desc: "Subscribe to our newsletter to receive updates about current projects, new investments opportunities, and other exciting news from the NFTree community."
        },
        {
            img: img2,
            title: "Invest with Us",
            desc: "If you want to be a part of our family, you can invest in our projects. Every investment counts towards building a more sustainable future."
        },
        {
            img: img3,
            title: "Start Planting Now",
            desc: "With just a click of a button on NFTree's user-friendly dashboard, you can start planting trees today and reap the benefits for many years to come."
        },
    ]

    return (
        <>
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
                    <Typography variant="h2" gutterBottom>
                        Join the NFTree Community
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{mb:5}}>
                        Become part of the NFTree Community and feel proud of investing in a sustainable future. Our community members are not just investors but the instrumental partners of NFTree in making this world a better playground for our future generation.
                    </Typography>
                    <Grid
                        container
                        spacing={{ xs: 3, md: 4 }}>
                        {
                            joinData.map((item) => {
                                return (
                                    <Grid
                                        item
                                        xs={4}>
                                        <Card sx={{ maxWidth: 345,height: '100%' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={item.img}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div"
                                                        sx={{ color: '#F2B42D' }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body1" color="text.secondary">
                                                        {item.desc}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                </Grid>
                <Grid
                    item
                    xs={2}
                    sx={{ display: { xs: "none", lg: "block" } }}></Grid>
            </Grid>
        </>
    );
};

export default Join;
