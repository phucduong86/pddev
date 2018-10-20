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
          <p>I like people, and absolutely passionate about Web Accessibility.</p>
          <p>If you have a project in mind, or just want to grab a coffee, <Link to="/contact">get in touch with me</Link>.</p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Programming Languages</h4>
            <p>Golang, Javascript, C++, Java</p>
            <h4>Web</h4>
            <p>Node.js, Vue.js, React.js, jQuery, HTML5, CSS3, Node.js, Express.js, Wordpress</p>
            <h4>Database</h4>
            <p>MongoDB, Oracle SQL, MS SQL, MySQL</p>
            <h4>My tool shed</h4>
            <p>Visual Studio Code, SCSS, Gulp.js, Docker, Vargrant, Codepen.io, Ansible, Jenkins, Selenium WebDrivers, CodeceptJs</p>
          </div>

        </aside>
      </div>

    </Wrapper>
  </ContentPage>
);

export default About;