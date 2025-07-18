import styles from './rodape.module.sass';


import {
  FaGithub,
  FaUserAstronaut,
  FaHome,
  
} from "react-icons/fa";

import {TbCertificate} from "react-icons/tb";

import { DiVisualstudio } from "react-icons/di";

import { ImLinkedin } from "react-icons/im";

import { Gi3DHammer } from "react-icons/gi";

import {useState} from "react";

const Navbar=() => {
  const [activeNav,setActiveNav]=useState("/");
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a
            href="/"
            onClick={() => setActiveNav("/")}
            className={activeNav==="/"? "active":""}
          >
            <FaHome />
          </a>
        </li>

        <li>
          <a
            href="/about"
            onClick={() => setActiveNav("/about")}
            className={activeNav==="/about"? "active":""}
          >
            <FaUserAstronaut />
          </a>
        </li>
        <li>
          <a
            href="/github"
            onClick={() => setActiveNav("/github")}
            className={activeNav==="/github"? "active":""}
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="/certifique"
            onClick={() => setActiveNav("/certifique")}
            className={activeNav==="/certifique"? "active":""}
          >
            <TbCertificate />
          </a>
        </li>
        <li>
          <a
            href="/contact"
            onClick={() => setActiveNav("/contact")}
            className={activeNav==="/contact"? "active":""}
          >
            <ImLinkedin />
          </a>
        </li>

        <li>
          <a
            href="/projects"
            onClick={() => setActiveNav("/projects")}
            className={activeNav==="/projects"? "active":""}
          >
            <DiVisualstudio />
          </a>
          
        </li>
        <li>
          <a
            href="/construcao"
            onClick={() => setActiveNav("/construcao")}
            className={activeNav==="/construcao"? "active":""}
          >
            <Gi3DHammer />
          </a>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
