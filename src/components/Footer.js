import styles from "@/app/Footer.module.css";
import { lato } from "@/app/fonts";

export default function Footer() {
  return (
    <section className={lato.className}>
      <footer className={styles.footer}>
        <p>&copy; 2023 Billy Alexander</p>
      </footer>
    </section>
  );
}
