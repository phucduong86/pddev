import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';


import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hello world.</h1>
          <p>I’m a web developer living in Ottawa, Canada.</p>
          <p>My journey dated back in the early 2000s when I put together Html snippets from any source I can find to create static websites on the net, hosting music streaming services from my mp3 collections and building forums using phpBB and vBulletin to compete with my High School's forum. Obviously I failed but it was a great learning experience and I made many friends.</p>
          <p>I obtained my Electronic Engineering Certification from <OutboundLink to="https://algonquincollege.com">Algonquin College</OutboundLink> where I learned to design and build electrical machines. Then another unexpected turn saw me becoming a System Admin at the <OutboundLink to="https://ottawa.ca">City of Ottawa</OutboundLink> for several years.</p>
          <p>I now spend my day as a System Developer/Integrator at the City, supporting the Transit Applications at <OutboundLink to="https://octranspo.com">OC Transpo</OutboundLink>, and collaborate with cool peeps at <OutboundLink to="http://yowcivictech.ca/">Ottawa Civic Tech</OutboundLink> on Open-Source projects</p>
          <p>If you have a project in mind, <Link to="/contact">get in touch</Link>.</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Programming Languages</h4>
            <p>C#, C++, Javascript, PHP</p>
            <h4>Web</h4>
            <p>JQuery, HTML5, CSS3, Node.js, Express.js, PHP, Wordpress, Drupal, ASP.NET, React.js</p>
            <h4>Database</h4>
            <p>MongoDB, Oracle SQL, MS SQL</p>
            <h4>Development Toolkit</h4>
            <p>Visual Studio Professional, Visual Studio Code, SCSS, Gulp.js, Bootstrap, Docker, Vargrant, Codepen.io, C9.io</p>
          </div>

        </aside>
      </div>

    </Wrapper>
  </ContentPage>
);

export default About;