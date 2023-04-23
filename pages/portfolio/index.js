import Portfolio from "../../components/Partfolio";

export default function PortfolioPage() {
  return <Portfolio />;
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../constants/lang/${locale}.json`)).default,
    },
  };
}
