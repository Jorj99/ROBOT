import Head from "next/head";

export default function FormPage() {
  return (
    <div className="xl:hidden block my-[10%]">
      <Head>
        <title>CONTACTS | Dwin Technology</title>
      </Head>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../constants/lang/${locale}.json`)).default,
    },
  };
}
