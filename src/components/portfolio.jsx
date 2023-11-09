import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Chani from '../files/Chani.gif';
import Racheli from '../files/Racheli.gif';
import mm from '../files/מלאכת מחשבת.gif'
import './portfolio.css';
export default function Portfolio() {

    return (
        <div>
            <Card className='pic' sx={{ margin: '30px', maxWidth: 345,  outlineOffset: '0.5em' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Chani}
                        alt="green iguana"
                        style={{ height: '100%', display: 'inherit' }}
                    />
                </CardActionArea>
            </Card>
            <Card className='pic' sx={{ margin: '30px', maxWidth: 345, outlineOffset: '0.5em' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Racheli}
                        alt="green iguana"
                        style={{ height: '100%', display: 'inherit' }}
                    />
                </CardActionArea>
            </Card>
            <Card className='pic' sx={{ margin: '30px', maxWidth: 345, outlineOffset: '0.5em' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={mm}
                        alt="green iguana"
                        style={{ height: '100%', display: 'inherit' }}
                    />
                </CardActionArea>
            </Card>
        </div>

    );
}