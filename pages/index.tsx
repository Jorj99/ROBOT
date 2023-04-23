import Head from "next/head";
import Welcome from "../components/Home";
// import OurClients from "../components/Home/OurClients";
// import Portfolio from "../components/Home/Portfolio";
// import Catalog from "../components/Home/Catalog/insex";
// import Explanation from "../components/Explanation";
// import Form from "../components/Form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jorj</title>
      </Head>
      <Welcome />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../constants/lang/${locale}.json`)).default,
    },
  };
}
