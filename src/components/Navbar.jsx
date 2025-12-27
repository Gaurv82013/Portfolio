import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={cn("fixed w-full top-0 z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center gap-2">
                    <span className="relative z-10"><span className="text-glow text-foreground">Gaurav's </span>Portfolio</span>
                </a>
                {/* desktop nav  */}
                <div className="hidden md:flex space-x-8 mr-24">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav  */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
                <div className={cn("fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden",
                    isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col items-center space-y-6 text-xl">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    )
}