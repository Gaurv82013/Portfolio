import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className=" container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">Passionate web Developer & Tech Creator</h3>
                        <p className="text-muted-foreground">
                            I'm Gaurav Kumar, a dedicated full-stack web developer with a passion for crafting efficient and scalable digital solutions. With expertise in both front-end and back-end technologies, I specialize in building responsive web applications that deliver exceptional user experiences. My approach combines clean code, clear thinking, and a focus on real-world impact to create products that not only meet but exceed client expectations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="contact" className="cosmic-button">Get In Touch</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-lg">Web Development</h4>
                                    <p className="text-sm text-muted-foreground">Building responsive and dynamic web applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-lg">UI/UX Design</h4>
                                    <p className="text-sm text-muted-foreground">Creating intuitive and engaging user interfaces.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-lg">Project Management</h4>
                                    <p className="text-sm text-muted-foreground">Overseeing projects to ensure timely and successful delivery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}