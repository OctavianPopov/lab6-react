import { letters } from "../constants/letters";

function Tastatura({ ghicesteLitera, litereGhicite, dezactivat }) {
    return (
        <div className="tastatura">
            {letters.map(litera => (
                <button
                    key={litera}
                    className="tasta"
                    onClick={() => ghicesteLitera(litera)}
                    disabled={litereGhicite.includes(litera) || dezactivat}
                >
                    {litera}
                </button>
            ))}
        </div>
    );
}

export default Tastatura