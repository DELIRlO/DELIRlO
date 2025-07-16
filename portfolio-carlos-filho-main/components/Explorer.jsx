import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.jsx',
    path: '/',
    icon: 'coffee.svg',
  },
  {
    name: 'sobre.html',
    path: '/about',
    icon: 'brainfuck.svg',
  },
  {
    name: 'contato.css',
    path: '/contact',
    icon: 'edge.svg',
  },
  {
    name: 'projetos.js',
    path: '/projects',
    icon: 'test-js.svg',
  },

  {
    name: 'github.md',
    path: '/github',
    icon: 'git.svg',
  },
  {
    name: 'certifica.cer',
    path: '/certifique',
    icon: 'certificate.svg',
  },
  {
    name: 'construcao',
    path: '/construcao',
    icon: 'json_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfólio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
