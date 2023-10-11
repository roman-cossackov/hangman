import styles from "./ResultModal.module.css";
import { RiCloseLine } from "react-icons/ri";

const ResultModal = (props) => {
    return (
        <>
            <div
                className={styles.darkBG}
                onClick={() => props.setIsWon(false)}
            />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>YOU WON!!!</div>
                    <div className={styles.actionsContainer}>
                        <button
                            className={styles.deleteBtn}
                            onClick={() => props.setIsWon(false)}
                        >
                            Start new game
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResultModal;
