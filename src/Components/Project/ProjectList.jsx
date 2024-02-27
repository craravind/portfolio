import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const ProjectList = (props) => {
    const { PName, Demo, Score, img } = props.data;
    return (
        <>
            <div key={PName} className="ProjectDetails">
                <p className="PPN">{PName}</p>
                <a href={Demo} className="LinkIcon" target='_blank'><FaArrowUpRightFromSquare /></a>
                <div className="ProjectImg" id={PName}>
                    <img src={img} alt={PName} className='img' id={PName} />
                </div>

                <div className="ProjectLink">
                    {/* <h5 className="PName">{PName}</h5> */}
                    <div className="buttons">
                        <a href={Demo} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="Projectbtn">
                            Live Demo
                            </button>
                        </a>
                        <a href={Score} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="Projectbtn">
                            Score
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
