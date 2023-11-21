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
import bg from '../files/bg.png';
import './fonts.css';

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
        <>
        <div className='contact'>
            <MDBContainer className="py-5" style={{ maxWidth: '100%' }}>
                <MDBRow className="justify-content-center align-items-center" >
                    <MDBCol>
                        <MDBCard className="my-4 shadow-3" style={{backgroundColor:'black'}}>
                            <MDBRow className="g-0">
                                <MDBCol md="6" className="d-xl-block bg-image">
                                    <MDBCardImage src={bg} alt="Sample photo" fluid style={{ width: '100%', minHeight: '330px', height: '100%' }} />
                                    <div className='mask' style={{ backgroundColor: '#00000090' }}>
                                        <div className="justify-content-center align-items-center h-100">
                                            <div className="text-center" style={{ marginTop: '20%' }}>

                                                <figure className="text-center mb-0" >
                                                    <blockquote className="whitequote text-white" >
                                                        <p className="pb-3" style={{ marginTop: '-50px' }}>
                                                            <span className="lead font-italic" style={{ fontFamily: 'dosis-medium', fontSize: '40px' }}>Let's get in touch</span>
                                                        </p>
                                                        <div className='contactinfo' style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '70%', marginLeft: '15%' }} >
                                                            <div className="d-flex">

                                                                <MDBBtn className='mx-2' tag='a' color='white' outline floating style={{ borderWidth: '0.2px', width: '35px', height: '35px' }}>
                                                                    <LocationOnSharpIcon style={{ paddingTop: '8px', paddingLeft: '1px', width: '15px' }}></LocationOnSharpIcon>
                                                                </MDBBtn>
                                                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: '7px' }}><h6 style={{ fontFamily: 'dosis-medium', fontSize: '22px' }}>Address: &nbsp;</h6><h6 style={{ fontFamily: 'dosis-light', fontSize: '20px' }}>Jerusalem, Israel</h6></div>

                                                            </div>
                                                            <br />
                                                            <div className="d-flex" >

                                                                <MDBBtn className='mx-2' tag='a' color='white' outline floating style={{ borderWidth: '0.2px', width: '35px', height: '35px' }}>
                                                                    <PhoneAndroidIcon style={{ paddingTop: '8px', paddingLeft: '1px', width: '15px' }}></PhoneAndroidIcon>
                                                                </MDBBtn>
                                                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: '7px' }}><h6 style={{ fontFamily: 'dosis-medium', fontSize: '22px' }}>Phone: &nbsp;</h6><h6 style={{ fontFamily: 'dosis-light', fontSize: '20px' }}>+97252-766-1873</h6></div>
                                                            </div>
                                                            <br />
                                                            <div className="d-flex" >

                                                                <MDBBtn className='mx-2' tag='a' color='white' outline floating style={{ borderWidth: '0.2px', width: '35px', height: '35px' }}>
                                                                    <EmailIcon style={{ paddingTop: '8px', paddingLeft: '1px', width: '15px' }}></EmailIcon>
                                                                </MDBBtn>
                                                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: '7px' }}><h6 style={{ fontFamily: 'dosis-medium', fontSize: '22px' }}>Email: &nbsp;</h6><a href="mailto:sarahkulbersh1@gmail.com" style={{ fontFamily: 'dosis-light', fontSize: '20px' }}>Sarahkulbersh1@gmail.com</a>
                                                                </div>
                                                            </div>

                                                        </div>


                                                    </blockquote>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6" style={{ backgroundColor: '#D59B33' }}>
                                    <MDBCardBody className="p-md-5 text-black" >
                                        <MDBTypography className="mb-4 " style={{ color: 'white', alignItems: 'center', fontFamily: 'dosis-medium', fontSize: '40px' }}>Get in touch</MDBTypography>

                                        <form onSubmit={handleSubmit} className="emailForm">

                                            <MDBInput
                                                style={{ fontFamily: 'dosis-medium' }}
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
                                                style={{ fontFamily: 'dosis-medium' }}
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
                                                style={{ border: "2px solid green!important", fontFamily: 'dosis-medium' }}
                                                required
                                                contrast
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}></MDBTextArea>
                                            <div className="d-flex justify-content-center pt-3">
                                                <MDBBtn size="lg" type="submit" className="ms-2" style={{ backgroundColor: '#D59B33', border: '1px solid #D59B32', borderRadius: '5px', boxShadow: 'none', color: 'white', fontFamily: 'dosis-medium', fontSize: '18px', textTransform: 'none' }}>Send Message</MDBBtn>
                                            </div>
                                            <br />
                                            <Box sx={{ width: '100%', marginLeft: '25%' }}>
                                                <Collapse in={open}>
                                                    <Alert
                                                        icon={false}
                                                        style={{ backgroundColor: '#D59B33', color: 'white', width: '50%', border: 'solid white 2px', fontFamily: 'dosis-medium', fontSize: '18px' }}
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
                                                        Thank you for your message!
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
        </div>
        </>
    );
}