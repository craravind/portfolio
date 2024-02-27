import "./Skill.css";
import {SkillsData} from '../../Data/SkillsData'
import { SkillsIcon } from "./SkillsIcon";
import './Skill.css'


export const Skills = () => {
    return (
        <section className="Skills">
            <div className="Sk-Topic">
                <h1 className="Topic-Title scrollFill">Skills</h1>
            </div>
            <div className="Sk-Container">
                {SkillsData.map((Skill) => (
                    <SkillsIcon data={Skill} />
                ))}
            </div>
        </section>
    );
};
