// LetterPage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeartRain from './HeartRain';
import usePlayerStore from "./estados/estados.js";
import useVentana from "./estados/ventana.js";
import BackgroundMusic from "./musica.js";

const letterContents = {
    1: [
        "Mi querida Nadith,",
        "Aun recuerdo ese\n" +
        "                            marzo que llegaste a mi vida, desde entonces mi vida cambió de inmediato, y cuando te empecé\n" +
        "                            a amar,\n" +
        "                            todo en mí cambió. Cada día a tu lado es un regalo,\n" +
        "                            como si Dios hubiera conspirado para que nuestras almas se encontraran...",
        "Como dice en Eclesiastés 3:11, " +
        `"Todo lo hizo hermoso en su tiempo, y tú llegaste justo en el momento indicado, cuando mi corazón necesitaba el amor que solo tú podías dar. "` +
        "Desde entonces, siento que el amor es paciente, es bondadoso (1 Corintios 13:4), y a tu lado he aprendido a vivirlo cada día...",

        "Desde que llegaste a mi vida, todo ha sido mejor. Eres mi alegría, mi paz," +
        " mi amor, y cada día a tu lado es un regalo que agradezco a Dios. Gracias por ser mi compañera, " +
        "mi amiga, mi amor, mi todo. Te amo más de lo que las palabras pueden expresar, " +
        "y siempre estaré agradecido por tu amor.",

        "Eres mi razón para soñar y mi lugar seguro en este mundo caótico. " +
        "Gracias por pintar mis días de colores que no sabía que existían y por enseñarme que el amor verdadero no solo se siente, " +
        "sino que se vive en cada mirada, en cada abrazo y en cada instante juntos. Contigo, " +
        "todo tiene sentido, y mi corazón late con la certeza de que tú eres y siempre serás el mejor ragalo que Dios me dio...",

        "Eres mi regalo perfecto, mi reflejo del versículo de Proverbios 18:22: " +
        "\"El que halla esposa halla el bien y alcanza el favor del Señor\"." +
        " Y aunque nuestras almas aún estén en construcción, sé que Dios nos guía para que este amor sea eterno y bendecido.",

        "TE AMO NADITH YOANA"
    ],
    2:[
        "Nuestra Historia",

        "Mi amor hermoso, mi dulce Nadith,",

        "Hoy quiero escribirte estas palabras desde lo más profundo de mi corazón, " +
        "para recordarte lo increíblemente especial que eres para mí y lo maravillosa que ha sido " +
        "nuestra historia juntos. Desde que llegaste a mi vida, llenaste cada rincón de mi alma " +
        "con luz, amor y la certeza de que Dios tenía preparado algo hermoso para nosotros.",

        "Todo comenzó en marzo de 2024, cuando, con el corazón lleno de ilusión, te escribí por Messenger. " +
        "Para ser sincero, al principio sentí que ni siquiera recordabas mi existencia, " +
        "y noté que estabas un poco reacia a abrirme tu corazón. Pero, aun así, Dios tenía otros planes. " +
        "Poco a poco, con cada conversación, con cada mensaje, algo comenzó a florecer entre nosotros. " +
        "Y aunque intentabas resistirte a lo inevitable, el amor hizo su magia… y aquí estamos, " +
        "construyendo algo tan puro y hermoso que parece sacado de un sueño.",

        "Pero si hubo un día que marcó mi vida, fue aquel 14 de julio. La primera vez que hablé contigo " +
        "en persona, los nervios se apoderaron de mí, el tiempo pareció detenerse y mi corazón " +
        "latía con fuerza, porque sabía que estaba a punto de ver de cerca a la persona que ya me tenía " +
        "completamente enamorado. Y cuando te vi, supe que todo valió la pena… tu voz, tu mirada, " +
        "tu esencia… en ese instante me di cuenta de que no había marcha atrás, " +
        "de que mi corazón ya te pertenecía por completo.",

        "Amo todo de ti, mi amor. Tu dulzura, tu fortaleza, tu manera de hacerme sentir el hombre " +
        "más afortunado del mundo. Y si hay algo que atesoro con toda mi alma, es que nuestro amor " +
        "es guiado por Dios. Leer la Biblia contigo, compartir nuestra fe, saber que nuestro amor " +
        "no solo se basa en sentimientos, sino en un propósito divino, es la mayor bendición que " +
        "he recibido. Gracias por ser la prueba viviente de que el amor verdadero existe, " +
        "de que Dios une lo que está destinado a estar junto, de que tú y yo éramos parte de su plan perfecto.",

        "Gracias, mi princesa, por permitirme ser parte de tu vida, por darme tu amor, " +
        "por llenar mis días de alegría y por enseñarme que el amor no solo se dice, sino que se vive. " +
        "Prometo cuidarte, amarte y caminar siempre de tu mano, con Dios en el centro de todo, " +
        "porque a tu lado, todo tiene sentido.",

        "Eres mi sueño hecho realidad, la melodía más hermosa en la sinfonía de mi vida, " +
        "la bendición más grande que Dios me ha regalado.",

        "TE AMO, MI VIDA, CON TODO MI CORAZÓN.",

        "Con todo mi amor, por siempre y para siempre,",
        "Daniel David Henriquez Julio."
    ],
    3:[
        "Promesa de amor",

        "Prometo amarte en cada amanecer, con la misma pasión y devoción del primer día, " +
        "y hacer que cada día a tu lado sea un reflejo del amor eterno que siento por ti.",

        "Cuidar de tu corazón como el mayor tesoro, " +
        "protegiéndolo con todo mi ser, porque sé que lo que más valoro en este mundo es tu amor, " +
        "y mi mayor deseo es hacerte sentir segura, amada y valorada en todo momento.",

        "Ser tu refugio en los días difíciles, tu hombro en el que puedas apoyarte, " +
        "y tu compañero incansable, dispuesto a luchar contigo contra cualquier adversidad. " +
        "Tu felicidad será siempre mi prioridad, y tu bienestar mi mayor misión.",

        "Honrar nuestro amor cada día de mi vida, recordando siempre que el amor no es solo una emoción, " +
        "sino una decisión diaria. Decidiré amarte, respetarte y valorarte con todo mi corazón, " +
        "en los días soleados y en los nublados, siempre con la certeza de que este amor es eterno." ,

        "Por siempre y para siempre, tuyo, mi amada. Mi vida, mi amor, mi razón de ser.",

        "Con todo mi amor, " +
        "Daniel David Henriquez Julio."
    ],
    4: [
        "El Futuro Juntos",

        "Desde que llegaste a mi vida, cada día ha sido una bendición, " +
        "y al pensar en el futuro, mi corazón se llena de esperanza y emoción al imaginar " +
        "todo lo que Dios tiene preparado para nosotros. Quiero que sepas que mi mayor sueño " +
        "es caminar a tu lado, construir un futuro juntos, lleno de amor, fe y bendiciones.",

        "Mi amor, quiero casarme contigo, porque sé que eres la mujer con la que quiero pasar el resto de mi vida. " +
        "Quiero prometerte amor eterno, fidelidad, y una vida llena de propósito, guiados por Dios. " +
        "En cada paso que demos juntos, sé que Él será el cimiento sobre el que construiremos " +
        "nuestro hogar, nuestra familia, y todo lo que más soñamos.",

        "Quiero construir un hogar donde Su amor sea el centro, " +
        "donde cada día se levante una oración de agradecimiento por nuestra unión. " +
        "Imagino un futuro donde, con tu mano en la mía, criemos a nuestros hijos en Su palabra, " +
        "donde cada enseñanza, cada abrazo, y cada gesto de amor esté lleno de fe y esperanza.",

        "Me veo contigo, amándote, cuidándote y compartiendo cada alegría, " +
        "pero también apoyándonos en los momentos difíciles, " +
        "recordando siempre que, como dice la Biblia en Proverbios 3:5-6: 'Confía en el Señor de todo tu corazón, " +
        "y no en tu propia inteligencia; reconócelo en todos tus caminos, " +
        "y él enderezará tus senderos'. Quiero que nuestros caminos sean siempre dirigidos por Él.",

        "A tu lado, mi amor, quiero ver cómo crece nuestra familia, " +
        "cosechar juntos los frutos de nuestro amor y trabajar incansablemente para crear un hogar " +
        "donde la paz, la fe, y el amor sean los pilares fundamentales de nuestra vida diaria.",

        "Sé que con Dios guiándonos, nuestro futuro será tan hermoso como nuestro presente. " +
        "Te amo con todo mi corazón, y estoy ansioso por vivir este viaje juntos, " +
        "construyendo nuestra familia, celebrando cada bendición, " +
        "y caminando siempre juntos en Su luz.",

        "Con amor eterno, tu futuro esposo, " +
        "Daniel David Henriquez Julio."
    ]

};

const LetterPage = () => {
    const { id } = useParams();
    const [step, setStep] = useState(0);
    const [showHearts, setShowHearts] = useState(false);
    const { setIsPlaying, ventana, setVentana } = usePlayerStore(); // Zustand store

    useEffect(() => {
        if (step === letterContents[id].length - 1) {
            setShowHearts(true);
        }
        console.log(ventana)
    }, [step, id]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-400 to-pink-500 relative overflow-hidden">
            <BackgroundMusic />
            {showHearts && <HeartRain />}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <Link
                    to="/"
                    className="absolute top-6 left-6 text-white hover:text-rose-200 transition-colors text-xl"
                    onClick={() => {setVentana(0); setIsPlaying(false);}}
                >
                    ← Volver
                </Link>

                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="glass-card p-8 rounded-3xl max-w-2xl mx-auto shadow-xl"
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="text-center space-y-8"
                        >
                            <motion.p
                                className="text-2xl text-white leading-relaxed font-serif italic"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                            >
                                {letterContents[id][step]}
                            </motion.p>

                            {step < letterContents[id].length - 1 && (
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="heart-pulse2 text-white text-lg shadow-2xl"
                                    onClick={() => { setStep(prev => prev + 1) }}
                                >

                                </motion.button>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default LetterPage;
