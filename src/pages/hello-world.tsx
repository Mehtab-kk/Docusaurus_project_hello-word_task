import React from 'react';
import Layout from '@theme/Layout';
import styles from './hello-world.module.css';

function HelloWorld() {
  return (
    <Layout
      title="Hello"
      
      description="Hello React page">
      <main className={styles.container}>
        <h1 className={styles.gradientText}>Hello World from SpecifyPlus + Claude! 👋</h1>
      </main>
    </Layout>
  );
}

export default HelloWorld;