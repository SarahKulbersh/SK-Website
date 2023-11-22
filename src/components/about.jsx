import '../files/Sarah Kulbersh.pdf';
import { Chip } from '@mui/material';
import { Stack } from '@mui/material';
import { MDBBtn } from 'mdb-react-ui-kit';
import './about.scss';
import './fonts.css';
import computer from '../files/computer.png';
export default function About() {


    function handleClick() {

    }
    const array = ["React", "Angular", "JavaScript", "TypeScript",  "Node.js","Java" ,"C#", ".NET Core", "OOP",  "MongoDB", "SQL", "UI/UX", "Responsive design", "CSS3", "HTML5",  "Docker", "Swagger", "API's", "Git", "Redux", "Postman"];

    const chips = array.map((label) => (
        <Chip
            label={label}
            variant="outlined"
            onClick={handleClick}
            style={{
                cursor: "default",
                display: "flex",
                flexWrap: "nowrap", // Prevent wrapping
                margin: '5px',
                padding: '10px',
                border: '2px solid #D59B33',
                fontFamily: 'dosis-light',
                color: 'white',
                fontSize: '16px'
            }}
        />
    ));


    return (
        <div className='diagonal'>
            <img src={computer} alt='computer' className='image' style={{ width: '40%', float: 'right', marginTop: '290px', marginRight: '7%' }} />
            <br />
            <h1 className='text'>SARAH KULBERSH</h1>
            <h3 className='text' style={{ color: '#D59B32' }}>Software Developer</h3>
            <h4 className='text'>I am a developer with a proficiency in design and creativity. I have experience working with After Effects, Illustrator, UI/UX design, and various programming languages. With my expertise in design, I develop user-friendly and efficient interfaces to create positive experiences for people. I am always looking for new ways to use my skills to make a difference in the world. If you have a project that you think I could help with, please don't hesitate to contact me.</h4>
            <br />
            <br/>
            <MDBBtn size="lg"
                className="ms2"
                style={{
                    backgroundColor: 'black',
                    border: '2px solid #D59B33',
                    borderRadius: '80px',
                    boxShadow: 'none',
                    textTransform: 'none',
                    marginLeft: '6%'
                }}>
                <a href={require("../files/Sarah Kulbersh.pdf")} download="Sarah Kulbersh" style={{ color: 'white', fontFamily: 'dosis-medium', fontSize: '18px' }}>Download CV</a>
            </MDBBtn>
            <br /><br />
            <h3 style={{ color: '#D59B33' }}>Skills</h3>
            <div className='stk'>
                <Stack direction="row" justifyContent="justify" flexWrap="wrap">
                    {chips}
                </Stack>
            </div>
        </div>
    );

}