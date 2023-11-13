import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import mastermind from '../files/Master Mind Game.mp4';
import babystore from '../files/babystore.mp4';
import textsearch from '../files/textsearch.mp4';
import mail from '../files/mail.mp4';

import './portfolio.css';


export default function Portfolio() {

    return (
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems:'center', height: '100vh'}}>
    <h1>Project Demo's</h1>

            <Card sx={{ maxWidth: 345, margin:'10px' }}>
                <CardActionArea>
                    <video
                        src={mail}
                        // autoPlay
                        loop
                        muted
                        controls
                        style={{ objectFit: 'cover', top: 0, left: 0, width: '100%', height: '100%' }}

                    />        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            React
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            JavaScript
                        </Typography>
                        <a href='https://github.com/SarahKulbersh/React-Shipping-website_using-MUI-and-MDB-design-libraries'>To view code on github click here</a>

                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345, margin:'10px' }}>
                <CardActionArea>
                    <video
                        src={babystore}
                        // autoPlay
                        loop
                        muted
                        controls
                        style={{ objectFit: 'cover', top: 0, left: 0, width: '100%', height: '100%' }}

                    />        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Mastermind
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            C#
                        </Typography>
                        <a href='https://github.com/SarahKulbersh/Online-shopping-site'>To view code on github click here</a>

                    </CardContent>
                </CardActionArea>
            </Card>


            <Card sx={{ maxWidth: 345, margin:'10px' }}>
                <CardActionArea>
                    <video
                        src={mastermind}
                        // autoPlay
                        loop
                        muted
                        controls
                        style={{ objectFit: 'cover', top: 0, left: 0, width: '100%', height: '100%' }}

                    />        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Mastermind
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            JavaScript
                        </Typography>
                        <a href='https://github.com/SarahKulbersh/Mastermind'>To view code on github click here</a>

                    </CardContent>
                </CardActionArea>
            </Card>


            <Card sx={{ maxWidth: 345, margin:'10px' }}>
                <CardActionArea>
                    <video
                        src={textsearch}
                        // autoPlay
                        loop
                        muted
                        controls
                        style={{ objectFit: 'cover', top: 0, left: 0, width: '100%', height: '100%' }}

                    />        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Mastermind
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            JavaScript
                        </Typography>
                        <a href='https://github.com/SarahKulbersh/Text-Searches'>To view code on github click here</a>

                    </CardContent>
                </CardActionArea>
            </Card>

            {/* <video loop autoplay='muted' src={mastermind} controls height={'200px'}> </video> */}

        </div>

    );
}