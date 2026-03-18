import { stages } from "../constants/stages";

function Spanzuratoare({ greseli }) {
    return (
        <img
            src={stages[greseli]}
            alt="hangman"
            style={{ width: "220px", marginBottom: "20px" }}
        />
    );
}

export default Spanzuratoare