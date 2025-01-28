// HeartRain.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeartRain = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts(prev => [
                ...prev.slice(-20),
                {
                    id: Date.now(),
                    left: Math.random() * 100,
                    duration: 2 + Math.random() * 3
                }
            ]);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none">
            {hearts.map(heart => (
                <motion.div
                    key={heart.id}
                    initial={{ y: -100, opacity: 1 }}
                    animate={{ y: '100vh', opacity: 0 }}
                    transition={{
                        duration: heart.duration,
                        ease: 'linear'
                    }}
                    className="absolute text-4xl text-pink-500"
                    style={{ left: `${heart.left}%` }}
                >
                    ❤
                </motion.div>
            ))}
        </div>
    );
};

export default HeartRain;