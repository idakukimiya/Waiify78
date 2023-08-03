import React from "react";

function ProjectItem({ image, name, liveUrl, gitUrl, description, tech }) {

    return (
        <div className="projectItem">

            <div style={{ backgroundImage: `url("${image}")` }} className="imageCard" >



                <div className="linkBtns">
                    <h1 className="projectCardName">{name}</h1>

                    <p className="sneakPeek">
                        {description}

                    </p>
                    <p className="tech">
                        {tech}
                    </p>

                    <div className="projectBtns">
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="linkInfo"
                        >
                            <button className="linkInfoBtn">Live</button>
                        </a>

                        <a
                            href={gitUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="linkInfo"
                        >
                            <button className="linkInfoBtn">Repo</button>
                        </a>

                    </div>

                </div>
            </div>

        </div>


    );


}

export default ProjectItem;