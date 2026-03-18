import { useState, useEffect } from "react";
import { words } from "../constants/words";
import Spanzuratoare from "./Spanzuratoare";
import Cuvant from "./Cuvant";
import Tastatura from "./Tastatura";
import MesajFinal from "./MesajFinal";

function alegeCuvantRandom() {
    return words[Math.floor(Math.random() * words.length)];
}

function SpanzuratoareJoc() {
    const [cuvant, setCuvant] = useState("");
    const [litereGhicite, setLitereGhicite] = useState([]);
    const [greseli, setGreseli] = useState(0);

    useEffect(() => {
        resetGame();
    }, []);

    function resetGame() {
        setCuvant(alegeCuvantRandom());
        setLitereGhicite([]);
        setGreseli(0);
    }

    function ghicesteLitera(litera) {
        if (litereGhicite.includes(litera)) return;

        setLitereGhicite(prev => [...prev, litera]);

        if (!cuvant.includes(litera)) {
            setGreseli(prev => prev + 1);
        }
    }

    const aCastigat = cuvant
        .split("")
        .every(l => litereGhicite.includes(l));

    const aPierdut = greseli >= 7;

    return (
        <div>
            <h1>Hangman</h1>

            <Spanzuratoare greseli={greseli} />

            <Cuvant cuvant={cuvant} litereGhicite={litereGhicite} final={aPierdut} />

            <Tastatura
                ghicesteLitera={ghicesteLitera}
                litereGhicite={litereGhicite}
                dezactivat={aCastigat || aPierdut}
            />

            {(aCastigat || aPierdut) && (
                <MesajFinal
                    castig={aCastigat}
                    cuvant={cuvant}
                    reset={resetGame}
                />
            )}
        </div>
    );
}

export default  SpanzuratoareJoc