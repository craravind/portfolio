import { BsPerson } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import Resume from '../../assets/Aravind R.pdf'
import { Link } from "react-scroll";
import './Home.css'

export const Home = () => {
    return (
        <section className="Home" id="Home">
            <div className="Card">
                <div className="Profile">
                    <div className="Profile-img"><BsPerson /></div>
                    <h1 className="Profile-Name">Aravind.R</h1>
                    <p className="Profile-Role">Full Stack Web Developer</p>
                </div>
                <div className="Info">
                <div className='InfoBtns'>
                        <a href={Resume} target='blank' className='ResumeBtn InfoBtn btnClick'><span>Resume</span><span className="ResumeIcon"><FaFileDownload /></span></a>
                        <Link to='Contact' spy={true} activeClass='active' smooth={true} offset={-150} duration={1000}  className='ContactBtn InfoBtn btnClick' >Contact</Link>
                    </div>
                    <p className='Details'>I am a skilled web developer with expertise in HTML, CSS, SASS, JavaScript, Bootstrap, Python, PHP, MySQL, React, and Git.</p>
                </div>
            </div>
        </section>
    )
}
