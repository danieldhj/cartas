// Home.jsx
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import BackgroundMusic from "./musica.js";
import usePlayerStore from "./estados/estados.js";
import {useEffect} from "react";

const letters = [
    { id: 1, title: "Carta a mi querida" },
    { id: 2, title: "Nuestra Historia" },
    { id: 3, title: "Promesa de amor" },
    { id: 4, title: "El Futuro Juntos" }
];

const Home = () => {
    const { setVentana } = usePlayerStore(); // Zustand store

    useEffect(() => {
        setVentana(0);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen bg-gradient-to-br from-pink-400 via-rose-300 to-pink-200 flex flex-col items-center justify-center p-8 "
        >

            {/* Título animado */}
            <motion.div
                initial={{ y: -50, scale: 0.8 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="mb-12 text-center"
            >
                <h1 className="text-6xl font-love text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
                    Cartas de Amor para mi querida Nadith Yoana De avila Seca
                </h1>
                <div className="heart-pulse mx-auto mt-6"></div>
            </motion.div>

            {/* Lista de cartas */}
            <div className="grid gap-8 md:grid-cols-3 w-full max-w-4xl">
                {letters.map((letter, index) => (
                    <motion.div
                        key={letter.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="glass-card p-6 rounded-2xl cursor-pointer"
                    >
                        <Link
                            to={`/letter/${letter.id}`}
                            className="block text-center text-2xl font-semibold text-rose-700 hover:text-rose-800 transition-colors"
                            onClick={() => setVentana(letter.id)}
                        >
                            {letter.title}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Efecto de corazones flotantes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl text-pink-500/30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            rotate: [0, 360],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        ❤
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Home;