import styles from '../styles/ContactCode.module.css';
import { ImLinkedin } from "react-icons/im";

const contactItems = [
  {
    social: 'github',
    link: 'ysneshy',
    href: 'https://github.com/ysneshy',
  },
  {
    social: 'linkedin',
    link: 'ysneshy',
    href: 'https://www.linkedin.com/in/ysneshy/',
  },
  {
    social: 'twitter',
    link: 'ysneshy',
    href: 'https://twitter.com/ysneshy',
  },
  {
    social: 'instagram',
    link: 'ysneshy',
    href: 'https://www.instagram.com/ysneshy/',
  },

  {
    social: 'telegram',
    link: 'ysneshy',
    href: 'https://t.me/ysneshy',
  },
  {
    social: 'wakatime',
    link: '@ysneshy',
    href: 'https://wakatime.com/@ysneshy',
  },
  {
    social: 'codesandbox',
    link: 'ysneshy',
    href: 'https://codesandbox.io/u/ysneshy',
  },
  {
    social: 'email',
    link: 'ysneshy@gmail.com',
    href: 'mailto:ysneshy@gmail.com',
  },
  {
    social: 'whatszap',
    link: 'Carlos_Filho',
    href: 'https://api.whatsapp.com/send?phone=559184851072',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}><ImLinkedin />&nbsp;.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
