import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import mastermind from '../files/mastermind.mp4';
import babystore from '../files/store.mp4';
import textsearch from '../files/textsearch.mp4';
import mail from '../files/mail.mp4';
import './portfolio.css';


export default function Portfolio() {

    return (
        <div className='divdiv' >
            <br />
            <h3 style={{ color: 'black', marginTop: '60px' }}>Project Demos</h3>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', minHeight: '100%', marginBottom: '100px' }}>

                <Card sx={{ maxWidth: 340, margin: '10px', backgroundColor: 'black', padding: '5px' }}>
                    <CardActionArea>
                        <video
                            src={mail}
                            // autoPlay
                            loop
                            muted
                            controls
                            style={{ objectFit: 'cover', top: 0, left: 0, width: '100%', height: '100%' }}

                        />        <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                            React
                        </Typography> */}
                            <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                React, MUI & MDB design libraries
                            </Typography>
                            <a href='https://github.com/SarahKulbersh/React-Shipping-website_using-MUI-and-MDB-design-libraries' style={{ color: 'gray' }}>To view code on github click here</a>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 340, margin: '10px', backgroundColor: 'black', padding: '5px' }}>
                    <CardActionArea>
                        <video
                            src={babystore}
                            // autoPlay
                            loop
                            muted
                            controls
                            style={{ objectFit: 'cover', top: 0, left: 0, width: '100%', height: '100%' }}

                        />        <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                            Mastermind
                        </Typography> */}
                            <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                JavaScript
                            </Typography>
                            <a href='https://github.com/SarahKulbersh/Online-shopping-site' style={{ color: 'gray' }}>To view code on github click here</a>

                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card sx={{ maxWidth: 340, margin: '10px', backgroundColor: 'black', padding: '5px' }}>
                    <CardActionArea>
                        <video
                            src={mastermind}
                            // autoPlay
                            loop
                            muted
                            controls
                            style={{ objectFit: 'cover', top: 0, left: 0, width: '100%', height: '100%' }}

                        />        <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                            Mastermind
                        </Typography> */}
                            <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                JavaScript
                            </Typography>
                            <a href='https://github.com/SarahKulbersh/Mastermind' style={{ color: 'gray' }}>To view code on github click here</a>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 340, margin: '10px', backgroundColor: 'black', padding: '5px' }}>
                    <CardActionArea>
                        <video
                            src={textsearch}
                            // autoPlay
                            loop
                            muted
                            controls
                            style={{ objectFit: 'cover', top: 0, left: 0, width: '100%', height: '100%' }}

                        />        <CardContent>
                            {/* <Typography gutterBottom variant="h5" component="div">
                            Mastermind
                        </Typography> */}
                            <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
                                C#
                            </Typography>
                            <a href='https://github.com/SarahKulbersh/Text-Searches' style={{ color: 'gray' }}>To view code on github click here</a>

                        </CardContent>
                    </CardActionArea>
                </Card>

            </div>
        </div>
    );
}