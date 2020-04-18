import React from 'react';
// import { Link } from 'gatsby';

import PageLayout from '../components/Layouts/PageLayout';
// import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <PageLayout>
    <SEO title="Home" />
    <h1>Hi! I&apos;m Ben!</h1>
    <h3>
      I&apos;m an author, speaker, software engineer, and just some dude that
      really likes a wide variety of weird and crazy stuff
    </h3>

    <p></p>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </PageLayout>
);

export default IndexPage;
