import Head from "next/head";

interface NextHeadProps {
  title?: string;
  description?: string;
}

export const NextHead = ({ title = "3LINES", description }: NextHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description ?? title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
