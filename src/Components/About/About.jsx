import "./About.css";

export const About = () => {
    return (
        <section className="About" id="About">
            <div className="Ab-Container">
                <h1 className="Ab-Topic scrollFill">About</h1>
                <h4 className="Ab-Intro">
                Strong foundation in Web Development, with a focus on both Frontend
                and Backend Technologies.
                </h4>
                <p className="Intro-Para">
                I am an Engineer graduate specializing in{" "}
                <span className="specialgrade">Full Stack Web Development</span>,
                adept at navigating both front-end and back-end technologies. My
                skills encompass <span>HTML</span>,{" "}
                <span className="specialgrade">CSS</span> (including{" "}
                <span className="specialgrade">SASS</span>),{" "}
                <span className="specialgrade">JavaScript</span>,{" "}
                <span className="specialgrade">Bootstrap</span>,{" "}
                <span className="specialgrade">React</span> for interactive front-end
                components, and <span className="specialgrade">Python</span>,{" "}
                <span className="specialgrade">MySQL</span>, and{" "}
                <span className="specialgrade">Git</span> for robust back-end
                development. Proficient in Responsive Design,{" "}
                <span className="specialgrade">DOM Manipulation</span>, and{" "}
                <span className="specialgrade">Grid/Flex Layout</span>, I bring
                hands-on experience in VSCode, React, PyCharm, and Git for efficient
                version control. Passionate about crafting seamless user experiences,
                I merge creativity with technical prowess to bring web development
                concepts to life. Explore my portfolio for a glimpse into my diverse
                skill set and project accomplishments.
                </p>
                <span className="specialgrade"></span>
            </div>
        </section>
    );
};
