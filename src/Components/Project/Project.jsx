import { ProjectList } from "./ProjectList"
import {ProjectData} from '../../Data/ProjectData'
// import './Project.css'
import './CSS/Project.css'
export const Project = () => {
    return (
        <section className="Project">
            <div className="Project-Topic">
                <h1 className="Topic-Title scrollFill">Project</h1>
            </div>
            <div className="Project-container">
                {
                    ProjectData.map((project)=>(
                        <ProjectList 
                            data = {project}
                        />
                    ))
                }
            </div>
            {/* <>
                {
                    ProjectData.map((Pro)=>(
                        <ProjectList
                            data = {Pro}
                        />
                    ))
                }
            </> */}
        </section>
    )
}
