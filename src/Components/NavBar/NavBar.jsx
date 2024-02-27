import { useState } from 'react'
import {NavData} from '../../Data/NavData'
import { Option } from './Option'
import './NavBar.css'
const Navbar = () => {
    const [NavOpen, setNavOpen] = useState(false)
    const [NavScroll,setNavScroll] = useState(false)
    const Toggle = () => setNavOpen(!NavOpen)
    const ChangeColor = () =>{
        if(window.scrollY>=50){
            setNavScroll(true)
        }else{
            setNavScroll(false)
        }
    }
    window.addEventListener('scroll',ChangeColor)
    return (
        <header className={NavScroll ? 'Header': 'header'}>
            <section className='ha-container'>
                <div className='ContainsLogo'>
                    <h1 className="Logo">AR</h1>
                </div>
                <nav className={NavOpen ? 'Options' : 'options' }>
                    <ul className='option'>
                        {
                            NavData.map((Nav)=>(
                                <Option 
                                    data= {Nav}
                                />
                            ))
                        }
                    </ul>
                </nav>
                <div className='box'>
                    <div className={NavOpen ? "MenuBar" : "MenuBars"} onClick={Toggle}>
                        <div className="OpenMenu">
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </div>
                        <div className="CloseMenu"><p className="Close">x</p></div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Navbar
