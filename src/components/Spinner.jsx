//Hooks
import { FaSpinner } from "react-icons/fa";
//Styles
import styles from "./Spinner.module.css";

export function Spinner() {
//Render    
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.spinning} size={60} />
    </div>
  );
}
