import React from 'react';
import ButtonCV from '../components/ButtonCV';
import styles from '../styles/CertificadoPage.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { TbCertificate } from "react-icons/tb";

const HomePage = () => {

  return (
    <>

      <div className={styles.container}>
        <div>
          <h2 className={styles.heading}><TbCertificate />&nbsp;Area de certificados</h2>
          <br></br>
          <div>
            <Carousel className={styles.carousel}
              /*onClickItem={true}*/
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
            >
              <img src="https://i.imgur.com/J4CZziC.png" alt="" />
              <img src="https://i.imgur.com/jv39UkU.png" alt="" />
              <img src="https://i.imgur.com/AH7FJea.png" alt="" />
              <img src="https://i.imgur.com/qXopCJC.png" alt="" />
              <img src="https://i.imgur.com/tYig84e.png" alt="" />
              <img src="https://i.imgur.com/eqEwj1z.png" alt="" />
              <img src="/certificate.svg" alt="" />
            </Carousel>
          </div>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ButtonCV />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default HomePage;
