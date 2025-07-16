import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/coffee.svg" filename="home.jsx" path="/" />
      <Tab icon="/brainfuck.svg" filename="sobre.html" path="/about" />
      <Tab icon="/edge.svg" filename="contato.css" path="/contact" />
      <Tab icon="/test-js.svg" filename="projetos.js" path="/projects" />
      <Tab icon="/git.svg" filename="github.md" path="/github" />
      <Tab icon="/certificate.svg" filename="certificado.cer" path="/certifique" />
      <Tab icon="/json_icon.svg" filename="construcao" path="/construcao" />
    </div>
  );
};

export default Tabsbar;
