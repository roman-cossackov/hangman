import styles from './Keyboard.module.css'

const KEYS = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const Keyboard = () => {
    return (
        <div className={styles.keyboard}>
            {KEYS.map(key => (
                <button className={`${styles.key} ${styles.inactive}`}>{key}</button>
            ))}
        </div>
    );
};

export default Keyboard;