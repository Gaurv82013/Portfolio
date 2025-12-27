import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);
    return (
        <>
        <nav className="fixed inset-x-4 md:left-1/2 md:right-auto md:-translate-x-1/2 transform z-50 w-auto max-w-4xl md:w-2/3 transition-all duration-300 mt-4 md:px-8 border border-primary/40 py-2 bg-transparent backdrop-blur-sm rounded-xl">
            <div className="flex items-center w-full justify-between px-4">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center gap-2">
                    <span className="relative z-10"><span className="text-glow text-foreground">Gaurav's </span>Portfolio</span>
                </a>
                {/* desktop nav  */}
                <div className="hidden md:flex space-x-8 items-center justify-end">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* mobile nav  */}
                <div className="md:hidden flex items-center space-x-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </div>
        </nav>

        {/* mobile overlay rendered outside the nav to avoid the nav's transform stacking context */}
        <div className={cn(
            "fixed inset-0 z-[9999] bg-background/100 flex flex-col items-center justify-start pt-28 space-y-8 transition-opacity duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
            <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-foreground bg-transparent z-[10001]"
                aria-label="Close menu">
                <X size={24} />
            </button>

            <div className="flex flex-col justify-center space-y-6 items-center text-xl">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
        </>
    )
}