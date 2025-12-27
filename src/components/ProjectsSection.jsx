import { ArrowRight, ExternalLink, Github } from "lucide-react"

export const ProjectsSection = () =>{
    const projects = [
        {
            id:1,
            title:"Project One",
            description:"This is a brief description of Project One.",
            image:"/projects/project1.png",
            tags:["React", "Node.js"],
            demourl:"#",
            githubUrl:"#"
        },
        {
            id:2,
            title:"Project Two",
            description:"This is a brief description of Project Two.",
            image:"/projects/project2.png",
            tags:["React", "Node.js"],
            demourl:"#",
            githubUrl:"#"
        },
        {
            id:1,
            title:"Project Three",
            description:"This is a brief description of Project Three.",
            image:"/projects/project3.png",
            tags:["React", "Node.js"],
            demourl:"#",
            githubUrl:"#"
        }
    ]
    
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center mb-12 text-muted-foreground mx-auto max-w-2xl">A selection of projects showcasing my skills and experience.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project)=>(
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                            </div>
                            
                            <div className="p-4">
                                <div className="flex flex-wrap gap-2 mb-4 items-center justify-center px-4">
                                    {project.tags.map((tag, key)=>(
                                        <span key={key} className="border px-2 bg-primary/20 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground text-center">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="space-x-4 flex">
                                        <a href={project.demourl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github <ArrowRight size={20} /></a>
                </div>
            </div>
        </section>
    )
}