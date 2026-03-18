function MesajFinal({ castig, cuvant, reset }) {
    return (
        <div>
            <h2 className={castig ? "verde" : "rosu"}>
                {castig
                    ? "Ai castigat!"
                    : `Ai pierdut! Cuvantul era: ${cuvant}`}
            </h2>

            <button className="btn-restart" onClick={reset}>
                Reincepe jocul
            </button>
        </div>
    );
}

export default MesajFinal