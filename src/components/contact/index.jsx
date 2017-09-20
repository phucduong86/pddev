import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'Contact me.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:phuc.duongdinh@gmail.com?subject=Hello%20Phuc!" className={styles.link}>phuc.duongdinh@gmail.com</a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/phucduong86/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/phuc-duong">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/pddev_ca/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;
