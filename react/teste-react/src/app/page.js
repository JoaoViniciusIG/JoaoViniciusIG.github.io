import styles from "./page.module.css";
import InputName from '../components/Input/inputName';

export default function Home() {
  return (
    <div className={styles.page}>
      <InputName />
    </div>
  );
}
