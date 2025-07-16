import React from "react";
import Link from "next/link";
import styles from "../styles/HomePage.module.css";
import Loading from "../components/Loading";
import { FaUserAstronaut } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { DiAndroid, DiMsqlServer } from "react-icons/di";

export default function HomePage() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className={styles.foreground}>
            <div className={styles.content}>
              <h6 className={styles.name}>
                <span>
                  <FaUserAstronaut />
                </span>
                &nbsp;Carlos Augusto Diniz Filho
              </h6>
              <h6 className={styles.bio}>Desenvolvedor Front-End</h6>
              <Link href="/projects">
                <button className={styles.button}>
                  <DiAndroid />
                  Meus projetos
                </button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>
                  <DiMsqlServer />
                  Contato
                </button>
              </Link>
              <div></div>
              <br></br>
              <Link href="/settings">
                <button className={styles.outlined}>
                  <FaMailchimp />
                  &nbsp;Troca tema
                </button>
              </Link>
            </div>
            <div></div>
            <div className={styles.illustration}>
              <span>
                <img src="background.svg" width="210px" alt="software" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
