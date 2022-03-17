import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1><Link to="/">尼欧的咖啡商店</Link></h1>
        </div>
      </header>
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
