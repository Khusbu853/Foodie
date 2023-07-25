import NavBar from "./NavBar";
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'

const Author = () => {
    return (
        <div>
            <div className="resturant-menu-navbar">
                <NavBar />
            </div>
            <div className="author-container">
                <h1>Khusbu</h1>
                <h3>Frontend Developer</h3>
                {/* <p>{<UilGithub />}<a href="https://github.com/Mansijain06/Foodring/tree/main/Foodring" target="_blank"><b>Github</b></a></p> */}
                <p>{<UilLinkedin />}<a href="https://www.linkedin.com/in/khusbu-gupta-816a52201/" target="_blank"><b>LinkedIn</b></a></p>
            </div>
        </div >
    );
};

export default Author;
