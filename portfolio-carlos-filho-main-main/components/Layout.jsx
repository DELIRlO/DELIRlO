import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';


const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <div className={styles.stars}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>
          <div className={styles.shooting_star}></div>
          <div className={styles.shooting_star} ></div>
          <div className={styles.terra}></div>
          <ul><li><p className={styles.sunshine}></p></li></ul>
          <ul><li className={styles.sun}></li></ul>
          <li className={styles.sun2}></li>
          <div className={styles.mars}></div>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>

      <Bottombar />

    </>
  );
};

export default Layout;


