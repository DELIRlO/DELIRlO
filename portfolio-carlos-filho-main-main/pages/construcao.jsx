import React from 'react';
import Link from 'next/link';
import styles from '../styles/ConstPage.module.css';
import { Fade, Rotate, Zoom, Flip } from 'react-reveal';
import Typewriter from 'typewriter-effect';
import {
  FaMailchimp,
  FaUserAstronaut,
  FaLaptopCode,
  FaHiking,
} from "react-icons/fa";


export default function HomePage() {


  return (
    <>

      <Typewriter
        options={{
          strings: ['Linguagem: Next, react, JavaScript, Css.', 'Portfolio em Atualização.'],
          autoStart: true,
          loop: true,
          skipAddStyles: true,
        }}
      />
      <br></br>
      <br></br>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}><FaLaptopCode />&nbsp;Pagina em construção</h1>
            <h6 className={styles.bio}><FaHiking />&nbsp;area em construção</h6>
            <Link href="/">
              <button className={styles.button}><FaUserAstronaut />&nbsp;Volta Para Home?</button>
            </Link>
            <div></div>
            <br></br>
            <Link href="/settings">
              <button className={styles.outlined}><FaMailchimp />&nbsp;Escolhe thema?</button>
            </Link>
          </div>
          <div className={styles.illustration}>
        <Zoom delay={1000} count={3}>
        <img src="astrocons.svg"  width="300px" alt="software" />
        </Zoom>
        </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
