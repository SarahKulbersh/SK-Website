import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTypography, MDBTextArea } from 'mdb-react-ui-kit';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import bg from '../files/bg.jpg';

export default function Contact() {

    const [open, setOpen] = React.useState(false);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        setOpen(true);

        const serviceId = 'service_ec2uj2t';
        const templateId = 'template_ysd3p6a';
        const publicKey = 'solDjkjc0hoyw-ZpO';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Sarah',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

    }

    return (

        <MDBContainer className="py-5" style={{ maxWidth: '1100px' }}>
            <MDBRow className="justify-content-center align-items-center" >
                <MDBCol>
                    <MDBCard className="my-4 shadow-3">
                        <MDBRow className="g-0">
                            <MDBCol md="6" className="d-xl-block bg-image" >
                                <MDBCardImage src={bg} alt="Sample photo" fluid />
                                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                                    <div className="justify-content-center align-items-center h-100">
                                        <div className="text-center" style={{ marginTop: '20%' }}>

                                            <figure className="text-center mb-0">
                                                <blockquote className="blockquote text-white">
                                                    <p className="pb-3">
                                                        <span className="lead font-italic">Let's get intouch</span>
                                                    </p>

                                                    <div className="d-flex" style={{ marginLeft: '20%' }}>

                                                        <MDBBtn className='mx-2' tag='a' color='white' outline floating style={{ borderWidth: '0.2px', width: '35px', height: '35px' }}>
                                                            <LocationOnSharpIcon style={{ paddingTop: '8px', paddingLeft: '1px', width: '15px' }}></LocationOnSharpIcon>
                                                        </MDBBtn>
                                                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '7px' }}><h6 style={{ fontWeight: 'bold' }}>Adress: &nbsp;</h6><h6>Jerusalem, Israel</h6></div>
                                                    </div>
                                                    <br />
                                                    <div className="d-flex" style={{ marginLeft: '20%' }}>

                                                        <MDBBtn className='mx-2' tag='a' color='white' outline floating style={{ borderWidth: '0.2px', width: '35px', height: '35px' }}>
                                                            <PhoneAndroidIcon style={{ paddingTop: '8px', paddingLeft: '1px', width: '15px' }}></PhoneAndroidIcon>
                                                        </MDBBtn>
                                                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '7px' }}><h6 style={{ fontWeight: 'bold' }}>Phone: &nbsp;</h6><h6>+97252-766-1873</h6></div>
                                                    </div>
                                                    <br />
                                                    <div className="d-flex" style={{ marginLeft: '20%' }}>

                                                        <MDBBtn className='mx-2' tag='a' color='white' outline floating style={{ borderWidth: '0.2px', width: '35px', height: '35px' }}>
                                                            <EmailIcon style={{ paddingTop: '8px', paddingLeft: '1px', width: '15px' }}></EmailIcon>
                                                        </MDBBtn>
                                                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: '7px' }}><h6 style={{ fontWeight: 'bold' }}>Email: &nbsp;</h6><a href="mailto:sarahkulbersh1@gmail.com">Sarahkulbersh1@gmail.com</a>
                                                        </div>

                                                    </div>


                                                </blockquote>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" style={{backgroundColor:'black'}}>
                                <MDBCardBody className="p-md-5 text-black"  >
                                    <MDBTypography tag="h3" className="mb-4 text-uppercase" style={{color:'#D59B33'}}>Get In Touch</MDBTypography>

                                    <form onSubmit={handleSubmit} className="emailForm">

                                        <MDBInput
                                            label='Name'
                                            type='text'
                                            className="mb-4"
                                            size="lg"
                                            required
                                            contrast
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />

                                        <MDBInput
                                            label='Email'
                                            type='text'
                                            className="mb-4"
                                            size="lg"
                                            required
                                            value={email}
                                            contrast
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <MDBTextArea
                                            id='textAreaExample'
                                            label='Message'
                                            rows={4}
                                            style={{ border: "2px solid green!important" }}
                                            required
                                            contrast
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}></MDBTextArea>
                                        <div className="d-flex justify-content-center pt-3">
                                            <MDBBtn size="lg" type="submit" className="ms-2" style={{ backgroundColor: 'black',border:'2px solid #D59B33', borderRadius: '80px', boxShadow:'none' }}>Send Message</MDBBtn>
                                        </div>
                                        <br/>
                                        <Box  sx={{ width: '100%' , marginLeft:'25%'}}>
                                            <Collapse in={open}>
                                                <Alert
                                                icon={false} 
                                                style={{backgroundColor:'gray', color:'white', width:'50%'}}
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="danger"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                    sx={{ mb: 2 }}
                                                >
                                                    Message was sent successfully!!
                                                </Alert>
                                            </Collapse>
                                            </Box>
                                    </form>

                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
}