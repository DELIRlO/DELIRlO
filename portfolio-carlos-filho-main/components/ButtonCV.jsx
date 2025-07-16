import styles from '../styles/ButtonCV.module.css'
const ButtonCV = () => {
  return (
    <button className={styles.container}>
      <a href="https://docs.google.com/uc?export=download&id=1i8A7Koklcbm12hLT5lRpa5a_z6bi5mgU" download>
        Currículo
        <img src="/down.png" alt="Botão para baixar curriculo" />
      </a>
    </button>
  )
}

export default ButtonCV;