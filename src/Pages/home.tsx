import React from "react";
import { motion } from "framer-motion";
import { Base } from "../Components/base";
import Scene from "../Components/scene";

export function Home(): React.ReactElement {
    return (
        <Base>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center p-6"
            >
                <motion.h1
                    className="text-4xl font-extrabold text-blue-500 drop-shadow-md"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    🚀 Olá! Bem-vindo ao meu site pessoal! 🚀
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Sou um <span className="text-yellow-400 font-semibold">Desenvolvedor Backend</span> com conhecimentos em <strong className="text-teal-400">Azure, Docker e CI/CD</strong>. 
                    E me aventuro no <span className="text-pink-400 font-semibold">Frontend</span> com certa frequência.
                </motion.p>
            <Scene/>
            </motion.div>
        </Base>
    );
}
