import { ArrowDown } from "lucide-react"

export const HeroSection = ()=> {
    return (
        <section id='hero' className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Gaurav</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Kumar</span>
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        A full-stack web developer who builds fast, scalable, and meaningful digital products — with clean code, clear thinking, and real-world impact.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">View My Work</a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8  transform  flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}