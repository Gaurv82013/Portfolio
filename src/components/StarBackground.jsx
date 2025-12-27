import { useEffect, useState } from "react";
export const StarBackground = () =>{
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/immutability
        generateStars();
        // eslint-disable-next-line react-hooks/immutability
        generateMeteors();

        const handleResize = () =>{
            generateStars();
        }
        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);
    }, [])

    const generateStars = () =>{
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];
        for(let i=0;i<numberOfStars;i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })

        }
        setStars(newStars);
    }

    const generateMeteors = () =>{
        const estimated = Math.floor(window.innerWidth * window.innerHeight / 200000);
        const numberOfMeteors = Math.max(0, Math.min(4, estimated));
        const newMeteors = [];
        for(let i=0;i<numberOfMeteors;i++){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 15,
                delay: Math.random() * 30,
                animationDuration: Math.random() * 3 + 3,
            })

        }
        setMeteors(newMeteors);
    }

    return(
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Star background effect implementation */}
            {stars.map((star) => (
                <div key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        opacity: star.opacity,
                        top: `${star.y}%`,
                        animationDuration: `${star.animationDuration}s`,
                    }}>

                </div>

            ) )}

            {meteors.map((meteor) => (
                <div key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 20}px`,
                        height: `${meteor.size}px`,
                        left: `${meteor.x}%`,
                        delay: `${meteor.delay}s`,
                        top: `${meteor.y}%`,
                        animationDuration: `${meteor.animationDuration}s`,
                    }}>

                </div>

            ) )}
        </div>
    )
}