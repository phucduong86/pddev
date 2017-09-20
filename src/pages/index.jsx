import React from 'react';
import Link from 'gatsby-link';

import Fullscreen from '../components/fullscreen';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';

import styles from './styles.module.css';

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          Hi. I’m Phuc Duong.
          <br />
          <br />
          I’m a full-stack web developer.
          <br />
          <br />
          Learn more <Link className={styles.link} to="/about">about me</Link>.
        </h1>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Index;
