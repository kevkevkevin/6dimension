import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title> {pageTitle && `${pageTitle} - Empowering Connectivity, Innovating Solutions`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="At Dimensions Software Company, we understand that technology is constantly changing, and we strive to stay up-to-date with the latest trends and developments in the industry. " />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);
 
export default SEO;
