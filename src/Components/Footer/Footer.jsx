import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import './Footer.css'
import { GeneralForm } from "./GeneralForm";





export const Footer = () => {
    return (
        <footer className="Footer" id='Contact'>
            <section className="F-Container">
                <div className="F-Topic">
                    <h1 className="T-name">Contact</h1>
                    {/* <h1>Touch wit Me</h1> */}
                </div>
                <div className="F-Icons">
                    <a className="I-Contain" href="https://www.linkedin.com/in/aravindr7/" target="blank">
                        <button className="btn Linked"><FaLinkedin /></button>
                        <p className="icon">Linked</p>
                    </a>
                    <a className="I-Contain" href='mailto:kaviyarasan110920@gmail.com'>
                        <button className="btn gmail"><MdEmail /></button>
                        <p className="icon">aravindr.offi@gmail.com</p>
                    </a>
                    <a className="I-Contain" href="tel:8667746044">
                        <button className="btn phone"><FaPhone /></button>
                        <p className="icon">+91 6379208845</p>
                    </a>
                    {/* <button type="button" className="btn"><div className="icon"><FaLinkedin /></div></button> */}
                    {/* <button type="button" className="btn"><div className="icon"><MdEmail /></div></button> */}
                    {/* <button type="button" className="btn"><div className="icon"><FaPhone /></div></button> */}
                    {/* <button type="button" className="btn"><div className="icon"><MdWeb /></div></button> */}
                </div>
                <GeneralForm />
            </section>
        </footer>
    )
}


// axios.post('https://sheet.best/api/sheets/bec1321d-698f-4456-b383-2fe80c719132',data).then((Response)=>{
//     console.log(Response);
//     setName('');
//     setMail('');
//     setMessage('');