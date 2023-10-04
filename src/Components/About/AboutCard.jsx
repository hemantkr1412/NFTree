import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

export default function MissionCard(props) {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
        });
    }, [])
    return (
        <Card sx={{
            maxWidth: 345,
            height: '100%',
            textAlign: 'center',
            padding: '1rem',
            boxShadow: '1px 0.2px 12px #08A454',
            borderRadius: '6px',
            margin: 'auto'
        }} className="serviceCard" data-aos="zoom-in">
            <CardContent className='cardContent'>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px', fontWeight: 'medium' }} className="serviceCardTitle">
                    {props.title}
                </Typography>
                <Typography
                sx={{mt: 2}}
                 variant="body1" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
        </Card >
    );
}