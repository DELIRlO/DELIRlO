import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';
import { FaUserAstronaut, } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { DiVisualstudio } from "react-icons/di";

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <span><FaUserAstronaut /></span>
      <div className={styles.items}>
        <p>Arquivo</p>
        <p>Editar</p>
        <p>Selecao</p>
        <p>Ver</p>
        <p>Acessar</p>
        <p>Terminal</p>
        <p>Ajuda</p>
      </div>
      <p className={styles.title}><GoRocket /> Carlos FIlho - Visual Studio Code <DiVisualstudio /></p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
