function Cuvant({ cuvant, litereGhicite, final }) {
    return (
        <div className="cuvant">
            {cuvant.split("").map((litera, index) => {
                const ghicit = litereGhicite.includes(litera);

                return (
                    <span
                        key={index}
                        className={`litera ${
                            ghicit ? "verde" : final ? "rosu" : ""
                        }`}
                    >
                        {ghicit || final ? litera : "_"}
                    </span>
                );
            })}
        </div>
    );
}

export default Cuvant