import '../files/Sarah Kulbersh.pdf';
import { Chip } from '@mui/material';
import { Stack } from '@mui/material';


export default function About() {


    function handleClick (){

    }
    const array = ["React", "Node.js","Angular", "C#", "OOP", "Java", "MongoDB", "SQL", "UI/UX", "Responsive design", "CSS3", "HTML5", ".NET Core", "Docker", "Swagger", "API's", "Git","Redux", "Postman"];

        const chips = array.map((label) => (
          <Chip label={label} variant="outlined" onClick={handleClick} />
        ));
    
    return (
        <div style={{ backgroundColor: 'lightblue', height: '100vh', width: '100%' }}>

            <br/>
            <br/>
            <br/>
            <h1>Sarah Kulbersh</h1>
            <h4>Software Developer</h4>
            <h2>I am a developer with a passion for design and creativity. I have over 5 years of experience working with After Effects, Illustrator, UI/UX design, and various programming languages. I am skilled at creating engaging and visually appealing video content, as well as designing and developing user-friendly and efficient interfaces.

I am passionate about using technology to solve real-world problems and create positive experiences for people. I believe that everyone should have access to high-quality design and development services, regardless of their budget or experience level. That's why I offer my services at a competitive price and provide a free consultation to all potential clients.

I am always looking for new and innovative ways to use my skills to make a difference in the world. If you have a project that you think I could help with, please don't hesitate to contact me.</h2>


            <br />
            <a href={require("../files/Sarah Kulbersh.pdf")} download="Sarah Kulbersh">Download file</a>
            {/* <Chip variant="outlined" color="secondary" /> */}
            {/* <Chip variant="outlined" color="secondary" label='hiiiii' /> */}

            <Stack direction="row" spacing={1}>
                <Chip label="Clickable" onClick={handleClick} />
                <Chip label="Clickable" variant="outlined" onClick={handleClick} />

            </Stack>
            <Stack direction="row" spacing={1}>
      {chips}
    </Stack>


        </div>
    );

}