import React from "react";
import Loading from "../components/Loading";
import ButtonCV from "../components/ButtonCV";
import styles from "../styles/About.module.css";

const AboutPage = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <article className={styles.cointainer}>
          <img
            src="./brainfuck.svg"
            min-width="30px"
            max-width="30px"
            width="30px"
            align="left"
          />
          <h1>Sobre mim</h1>
          <br></br>
          <img
            src="./formacao.svg"
            min-width="17px"
            max-width="17px"
            width="17px"
            align="left"
          />
          <b>
            &nbsp;Formado em Engenharia da Computação pós graduado em Engenharia
            de Redes e Telecomunicações pela Estacio Iesam.
          </b>
          <p>
            <img
              src="./react_icon.svg"
              min-width="17px"
              max-width="17px"
              width="17px"
              align="left"
            />
            &nbsp;A minha principal ferramenta de trabalho é o React, Python e
            Quasar apesar de ter conhecimentos sobre PHP, C, C++ escolhi me
            aprofundar no front-end, especialmente no sistema do React.
          </p>
          <p>
            <img
              src="./next.svg"
              min-width="17px"
              max-width="17px"
              width="17px"
              align="left"
            />
            &nbsp;No momento estou consolidando conhecimento sobre Next.js e
            desenvolvimento com JavaScript e Typescript.
          </p>
          <h2>
            <img
              src="./robots.svg"
              min-width="17px"
              max-width="17px"
              width="17px"
              align="left"
            />
            &nbsp;Algumas stacks que tenho conhecimento.
          </h2>
          <section className={styles.containerSkills}>
            <div className={styles.skill}>
              <h4>
                <b>
                  <img
                    src="./astyle.svg"
                    min-width="15px"
                    max-width="15px"
                    width="15px"
                    align="left"
                  />
                  Front-end
                </b>
              </h4>
              <ul>
                <img
                  src="./html.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>HTML5 </li>
                <img
                  src="./css.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>CSS3</li>
                <img
                  src="./next.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>Next.js</li>
                <img
                  src="./javascript.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>J.Script</li>
                <img
                  src="./react_icon.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>React</li>
              </ul>
            </div>
            <div className={styles.skill}>
              <h4>
                <b>
                  <img
                    src="./json_icon.svg"
                    min-width="15px"
                    max-width="15px"
                    width="15px"
                    align="left"
                  />
                  Back-end
                </b>
              </h4>
              <ul>
                <img
                  src="./nodejs.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>Node.js</li>
                <img
                  src="./typescript.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>Typescript</li>
                <img
                  src="./python.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>Python</li>
                <img
                  src="./database.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>MySQL</li>
              </ul>
            </div>
            <div className={styles.skill}>
              <h4>
                <b>
                  <img
                    src="./contributing.svg"
                    min-width="15px"
                    max-width="15px"
                    width="15px"
                    align="left"
                  />
                  Testes
                </b>
              </h4>
              <ul>
                <img
                  src="./contributing.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>Chai</li>
                <img
                  src="./siyuan.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>Sinon</li>
                <img
                  src="./mocha.svg"
                  min-width="17px"
                  max-width="17px"
                  width="17px"
                  align="left"
                />
                <li>Mocha</li>
              </ul>
            </div>
          </section>
          <div>
            <div className={styles.illustration}>
              <span>
                <img src="astrosobre.svg" width="170px" alt="software" />{" "}
              </span>
            </div>
            <ButtonCV />
          </div>
        </article>
      )}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
