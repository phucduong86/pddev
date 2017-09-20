import React from 'react';
import projects from '../../../data/projects';

import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const codepen = ({ location }) => {
  const project = projects.find(p => p.slug === 'codepen');

  const logo = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={logo} />
      <Wrapper>
        <h2><OutboundLink to="https://codepen.io/duongph/full/oZyOrv/">Play my pure JS MineSweeper Game</OutboundLink></h2>
        <h2><OutboundLink to="https://codepen.io/duongph/full/evVbpQ/">See my original animated SVG art</OutboundLink></h2>
        <h2><OutboundLink to="https://codepen.io/duongph/full/xqdPOq/">Check out my Random Quote Machine</OutboundLink></h2>
      </Wrapper>
    </ProjectPage>
  );
};

export default codepen;
