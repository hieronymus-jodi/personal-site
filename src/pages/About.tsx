import React from 'react';
import { Helmet } from 'react-helmet';

import { Hero, Experience } from '../components/PageSpecific/About';

function About() {
  return (
    <>
      <Helmet>
        <title>Jodi Hieronymus | About</title>
      </Helmet>
      <Hero />
      <Experience />
    </>
  );
}

export default About;
