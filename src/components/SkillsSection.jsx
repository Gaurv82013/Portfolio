import { useState } from "react"

const skills =[

    // Frontend Skills
    {name:"HTML/CSS", level:95, category:"Frontend"},
    {name:"JavaScript", level:90, category:"Frontend"},
    {name:"React", level:85, category:"Frontend"},
    {name:"TypeScript", level:75, category:"Frontend"},
    {name:"Next.js", level:70, category:"Frontend"},
    {name:"Tailwind CSS", level:90, category:"Frontend"},

    
    // Backend Skills
    {name:"Node.js", level:80, category:"Backend"},
    {name:"Express.js", level:75, category:"Backend"},
    {name:"MongoDB", level:70, category:"Backend"},
    {name:"Next.js", level:70, category:"Backend"},
    {name:"SQL", level:65, category:"Backend"},


    //Tools
    {name:"Git/GitHub", level:85, category:"Tools"},
    {name:"Docker", level:70, category:"Tools"},
    {name:"VS Code", level:90, category:"Tools"},

]

export const SkillsSection =()=>{
    const [activeCategory, setActiveCategory] = useState("All");
    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary"> Skills</span></h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {["All", "Frontend", "Backend", "Tools"].map((category, key)=>(
                        <button 
                            key={key}
                            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${activeCategory === category ? 'bg-primary text-white' : 'bg-card text-foreground hover:bg-primary hover:text-white'}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills
                        .filter(skill => activeCategory === "All" || skill.category === activeCategory)
                        .map((skill, key)=>(
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>   
                            <div className="bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]" style={{width: `${skill.level}%`}} />
                                
                            </div> 
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            

                        </div>


                    ))}
                </div>
            </div>
        </section>
    )
}