import React, { useEffect, useRef } from "react";
import usePlayerStore from "./estados/estados.js";

import audio1 from "./assets/home.mp3";
import a2 from "./assets/2.mp3";
import a3 from "./assets/3.mp3";
import a4 from "./assets/4.mp3";

const audioFiles = {
    1: audio1,
    2: a2,
    3: a3,
    4: a4,
};

const BackgroundMusic = () => {
    const { isPlaying, ventana, initialPlay, setInitialPlay } = usePlayerStore();
    const audioRef = useRef(new Audio());

    useEffect(() => {
        const newSrc = audioFiles[ventana] || audio1;

        const handlePlay = async () => {
            try {
                if (audioRef.current.src !== newSrc) {
                    audioRef.current.src = newSrc;
                    audioRef.current.loop = true;
                    await audioRef.current.play();
                }

                if (initialPlay) {
                    await audioRef.current.play();
                    setInitialPlay(false);
                }

                if (isPlaying) {
                    await audioRef.current.play();
                }
            } catch (error) {
                console.error("Error con la reproducción:", error);
            }
        };

        handlePlay();

        return () => {
            audioRef.current.pause();
            if (ventana !== 1) audioRef.current.currentTime = 0;
        };
    }, [ventana, isPlaying, initialPlay, setInitialPlay]);

    return null;
};

export default BackgroundMusic;
