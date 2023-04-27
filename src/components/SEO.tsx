import Head from "next/head";
import { FC } from "react";

interface SEOProps {
  pageTitle: string;
  pageDescription: string;
}

const SEO: FC<SEOProps> = ({ pageTitle, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
    </>
  );
};

export default SEO;
