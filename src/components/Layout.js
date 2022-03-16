import React from 'react';
import * as styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1>军的咖啡商店</h1>
        </div>
      </header>
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
