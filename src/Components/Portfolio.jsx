import { About } from "./About/About"
import { Skills } from "./Skills/Skills"
import { Home } from "./Home/Home"
import Navbar from "./NavBar/NavBar"
// import { Project } from "./Project/Project"
import { Footer } from "./Footer/Footer"



export const Portfolio = () => {
    return (
        <>
            {/* <div className="scroll-watcher"></div> */}
            <Navbar />
            <main className="main">
                <Home />
                <About />
                <Skills />
                {/* <Project /> */}
            </main>
            <Footer />
        </>
    )
}
