import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Services, Contact, Work, About } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Services />
    <Work />
    <About />
    <Contact />
  </Layout>
);
