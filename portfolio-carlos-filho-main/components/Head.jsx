import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
        <meta name="google-site-verification" content="BH9IGWPc8M0i_tMhP5f7VwupCOzk-l9cbKSKnzJtWQY" />
      <meta
        name="description"
        content="Desenvolvedor Front-End. Formado  em  Análise e Desenvolvimento e Engenharia da Computação pela faculdade Estacio-Iesam"
      />
      <meta
        name="keywords"
        content="carlos filho, web developer portfolio, carlos filho web developer, carlos filho, desenvolvedor web, carlos filho portfolio, portfolio de programador, portfolio de desenvolvedor, portfolio fullstack, programdor freelancer"
      />
      <meta property="og:title" content="Portfolio de Carlos Filho" />
      <meta
        property="og:description"
        content="Desenvolvedor Front-End, construo sistemas e sites web."
      />
      <meta property="og:image" content="https://imgur.com/0jXsflo.png" />
      <meta property="og:url" content="https://carlosfilho.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Carlos Filho',
};
