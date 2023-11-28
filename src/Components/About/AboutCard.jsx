import React, { useEffect } from 'react';
import {Card,CardContent,Typography} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

export default function MissionCard(props) {
    const splitDesc = props.desc.split(',');

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
        });
    }, [])
    return (
        <Card sx={{
            maxWidth: '100%',
            // border:'2px solid red',
            height: '100%',
            textAlign: 'center',
            padding: '1rem',
            boxShadow: '1px 0.2px 12px #aeafae',
            borderRadius: '6px',
            margin: 'auto'
        }} className="aboutCard" data-aos="zoom-in">
            <CardContent className='cardContent'>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '22px', fontWeight: 'medium',mb:3 }} className="aboutCardTitle">
                    {props.title}
                </Typography>
                <ul>
                    {splitDesc.map((item, index) => (
                        <li key={index} style={{textAlign:'start'}}>{item.trim()}</li>
                    ))}
                </ul>
            </CardContent>
        </Card >
    );
}