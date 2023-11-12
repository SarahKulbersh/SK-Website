import '../files/Sarah Kulbersh.pdf';
import { Chip } from '@mui/material';
import { Stack } from '@mui/material';
import { MDBBtn } from 'mdb-react-ui-kit';
import './about.scss';

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
                border: '1.5px dashed burlywood',
                fontFamily:'Eras Light ITC'
                
            }}
        />
    ));


    return (
        <div className='diagonal' >

            <br /><br /><br /><br />
            <h1>Sarah Kulbersh</h1>
            <h2>Software Developer</h2>
            <h4>I am a developer with a passion for design and creativity. I have experience working with After Effects, Illustrator, UI/UX design, and various programming languages. I am skilled at creating engaging and visually appealing video content, as well as designing and developing user-friendly and efficient interfaces.

                I am passionate about createing positive experiences for people. I believe that everyone should have access to high-quality design and development services, regardless of their budget or experience level. That's why I offer my services at a competitive price and provide a free consultation to all potential clients.

                I am always looking for new and innovative ways to use my skills to make a difference in the world. If you have a project that you think I could help with, please don't hesitate to contact me.</h4>


            <br />
            <MDBBtn size="lg" className="ms-2" style={{ backgroundColor: 'purple', borderRadius: '80px' }}>
                <a href={require("../files/Sarah Kulbersh.pdf")} download="Sarah Kulbersh" style={{ color: 'white' }}>Download CV</a>
            </MDBBtn>
            {/* <p className="tags">

            <span id='gg'>Tags</span> */}
            <Stack direction="row" margin='50px' justifyContent="justify" flexWrap="wrap">
                {chips}
            </Stack>
            {/* </p> */}
        </div>
    );

}