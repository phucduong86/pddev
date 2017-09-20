import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const snaphole = ({ location }) => {
  const project = projects.find(p => p.slug === 'snaphole');

  const logo = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={logo} />

    </ProjectPage>
  );
};

export default snaphole;
