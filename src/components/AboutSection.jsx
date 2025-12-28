import { PointerHighlight } from "./ui/pointer-highlight"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className=" container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        <img src="/MyPhoto.png" alt="My Photo" className="rounded-full shadow-sm h-[300px] md:h-[400px]" />

                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Passionate web Developer & Project Manager</h3>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            I am a first-year student at <PointerHighlight><span className="text-primary font-bold">_IIT Guwahati_</span></PointerHighlight> with a strong passion for <span className="text-primary font-bold">modern web development</span>.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            I enjoy building <span className="text-primary font-bold">clean</span>, <span className="text-primary font-bold">fast</span>, and <span className="text-primary font-bold">user-friendly</span> web applications using <span className="text-primary font-bold">modern technologies</span>.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            I like learning how real-world products are built and continuously improving my skills through projects.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            I believe in writing <span className="text-primary font-bold">simple</span>, <span className="text-primary font-bold">efficient code</span> and <span className="text-primary font-bold">growing</span>  every day as a <span className="text-primary font-bold">developer</span> and as a <span className="text-primary font-bold">person</span>.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            I am <span className="text-primary font-bold">curious</span>, <span className="text-primary font-bold">motivated</span>, and always ready to learn <span className="text-primary font-bold">new things</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="contact" className="cosmic-button">Get In Touch</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}