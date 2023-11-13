import '../files/Sarah Kulbersh.pdf';
import { Chip } from '@mui/material';
import { Stack } from '@mui/material';
import { MDBBtn } from 'mdb-react-ui-kit';
import './about.scss';
import computer from '../files/computer.png';
export default function About() {


    function handleClick() {

    }
    const array = ["React", "Node.js", "Angular", "C#", "OOP", "Java", "MongoDB", "SQL", "UI/UX", "Responsive design", "CSS3", "HTML5", ".NET Core", "Docker", "Swagger", "API's", "Git", "Redux", "Postman"];

    const chips = array.map((label) => (
        <Chip
            label={label}
            variant="outlined"
            onClick={handleClick}
            style={{
                display: "flex",
                flexWrap: "nowrap", // Prevent wrapping
                margin:'5px',
                padding:'10px',
                border: '2px solid #D59B33',
                fontFamily:'dosis-light',
                color: 'white',
                fontSize:'16px'

                
            }}
        />
    ));


    return (
        <div className='diagonal' >
            <img src={computer} className='image' style={{width:'40%', float:'right', marginTop:'250px', marginRight:'7%'}}/>
            <br /><br /><br/>
            <h1 className='text'>SARAH KULBERSH</h1>
            <h2 className='text'>Software Developer</h2>
            <h4 className='text'>I am a developer with a passion for design and creativity. I have experience working with After Effects, Illustrator, UI/UX design, and various programming languages. I am skilled at creating engaging and visually appealing video content, as well as designing and developing user-friendly and efficient interfaces.

                I am passionate about createing positive experiences for people. I believe that everyone should have access to high-quality design and development services, regardless of their budget or experience level. That's why I offer my services at a competitive price and provide a free consultation to all potential clients.

                I am always looking for new and innovative ways to use my skills to make a difference in the world. If you have a project that you think I could help with, please don't hesitate to contact me.</h4>


            <br />
            <MDBBtn size="lg" className="ms-2" style={{ backgroundColor: 'black',border:'2px solid #D59B33', borderRadius: '80px', boxShadow:'none' }}>
                <a href={require("../files/Sarah Kulbersh.pdf")} download="Sarah Kulbersh" style={{ color: 'white' }}>Download CV</a>
            </MDBBtn>
            <h1>Skills</h1>
            <Stack direction="row" margin='50px' marginRight='45%' justifyContent="justify" flexWrap="wrap">
                {chips}
            </Stack>
        </div>
    );

}