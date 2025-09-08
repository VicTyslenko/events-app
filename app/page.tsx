import styles from "./page.module.css";
import Main from "@/app/components/main";

export default function Home() {
  return (
    <div className={styles.page}>
      <Main />
    </div>
  );
}
