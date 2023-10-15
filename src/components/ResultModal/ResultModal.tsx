import styles from "./ResultModal.module.css";
import ReactDOM from "react-dom";

type ResultModalProps = {
    startNewGame: () => void;
    content: string;
};

const ResultModal = (props: ResultModalProps) => {
    return ReactDOM.createPortal(
        <>
            <div
                className={styles.darkBG}
                onClick={() => props.startNewGame()}
            />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>{props.content}</div>
                    <div className={styles.actionsContainer}>
                        <button
                            className={styles.newGameBtn}
                            onClick={() => props.startNewGame()}
                        >
                            Start new game
                        </button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modal")
    );
};

export default ResultModal;
