import { Github, Instagram, Linkedin, Mail, Map, Phone, Send } from "lucide-react"
import { success } from "../utils/toast";
import { useState } from "react"
export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = { name: "", email: "", message: "" };

        if (!name.trim()) newErrors.name = "Name is required";

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) newErrors.email = "Enter a valid email";
        }

        if (!message.trim()) newErrors.message = "Message is required";

        if (newErrors.name || newErrors.email || newErrors.message) {
            setErrors(newErrors);
            return;
        }

        setErrors({ name: "", email: "", message: "" });
        setIsSubmitting(true);

        setTimeout(() => {
            success("Message sent successfully!");
            setIsSubmitting(false);
            setName("");
            setEmail("");
            setMessage("");
        }, 1500);
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get In <span className="text-primary">Touch</span></h2>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    I'm always open to discussing <span className="text-primary font-bold">new projects</span>, <span className="text-primary font-bold">creative ideas</span>, or <span className="text-primary font-bold">opportunities</span> to be part of your visions. Feel free to reach out to me
                </p>
                <div className="flex justify-center mb-12 gap-6">
                    <span className="rounded-full border border-primary/40 p-2">
                        <a href="https://www.linkedin.com/in/gaurav474">
                            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                        </a>
                    </span>
                    <span className="rounded-full border border-primary/40 p-2">
                        <a href="https://github.com/Gaurv82013">
                            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                        </a>
                    </span>
                    <span className="rounded-full border border-primary/40 p-2">
                        <a href="https://www.instagram.com/gauravkr_474">
                            <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                        </a>
                    </span>
                </div>
                <div className="grid grid-cols-1 gap-12">

                    <div className="space-y-6 flex flex-col md:flex-row md:space-x-12 md:space-y-0 mb-12 justify-center items-center">
                        <div className="space-y-6 justify-center items-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <a href="mailto:gauravkumar803109@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">gauravkumar803109@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center items-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <a href="tel:+919771570572" className="text-muted-foreground hover:text-primary transition-colors">+91 9771570572</a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center items-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Map className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <a href="https://www.google.com/maps/place/Nalanda,Bihar,India" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Nalanda, Bihar (India)</a>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className="bg-transparent border border-primary/40 p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: "" })); }} id="name" name="name" className="w-full mt-1 p-2 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" required />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: "" })); }} id="email" name="email" className="w-full mt-1 p-2 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" required />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 mt-8">Your Message</label>
                                <textarea value={message} onChange={(e) => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: "" })); }} id="message" name="message" className="w-full mt-1 p-2 border rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary  resize-none h-32" required />
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                )}
                            </div>
                            <button disabled={isSubmitting} type="submit" className="flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors w-full gap-4">{isSubmitting ? "Sending..." : "Send Message"}<Send className="text-center" size={16} /></button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}