import { useState, useEffect } from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiFlask, SiFastapi, SiTypescript, SiGit, SiLinux, SiDocker } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { motion } from "framer-motion";

const icons = [
    { Component: FaPython, color: "#ffde57" },
    { Component: SiFlask, color: "#808080" },
    { Component: SiFastapi, color: "#05998b" },
    { Component: VscAzure, color: "#0078d4" },
    { Component: SiTypescript, color: "#007acc" },
    { Component: FaReact, color: "#61dafb" },
    { Component: SiGit, color: "#f34f29" },
    { Component: SiLinux, color: "#ffffff" },
    { Component: SiDocker, color: "#2496ed" },
];

export default function Scene() {
    const radius = 100;
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(prev => prev + 2);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-[300px] h-[300px] flex items-center justify-center">
            {icons.map((icon, index) => {
                const step = (2 * Math.PI) / icons.length;
                const x = radius * Math.cos(step * index + (angle * Math.PI) / 180);
                const y = radius * Math.sin(step * index + (angle * Math.PI) / 180);
                return (
                    <motion.div
                        key={index}
                        className="absolute"
                        animate={{ x, y }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <icon.Component size={40} color={icon.color} />
                    </motion.div>
                );
            })}
        </div>
    );
}
