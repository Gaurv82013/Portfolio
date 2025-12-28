import React from "react";
import { ProjectOne } from "./ProjectOne";
import { ProjectTwo } from "./ProjectTwo";
import { ProjectThree } from "./ProjectThree";
import { ProjectFour } from "./ProjectFour";

export const ProjectsSection = () =>{
    
    
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center mb-12 text-muted-foreground mx-auto max-w-2xl">A selection of projects showcasing my <span className="text-primary font-bold">skills</span> and <span className="text-primary font-bold">experience</span>.</p>

                {/* First Project: */}
                <ProjectOne />
                <ProjectTwo />
                <ProjectThree />
                <ProjectFour />
            </div>
        </section>
    )
}