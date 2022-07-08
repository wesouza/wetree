/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="./avatar.png" alt="Avatar" />
      </div>
      <Button href="https://www.linkedin.com/in/wesouza/">Linkedin</Button>
      <Button href="https://www.instagram.com/euwesouza/">Instagram</Button>
      <Button href="https://github.com/wesouza">Github</Button>

      <div className={styles.info}>
        <span>Feito com ❤️ por Wellington Souza</span>
      </div>
    </div>
  );
}
