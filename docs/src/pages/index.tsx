import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/users">
            💻 Docs for Users
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/devs">
            🧑‍💻 Docs for Developers
          </Link>
        </div>
      </div>
    </header>
  );
}

function MainWebsiteBanner(): JSX.Element {
  return (
    <section className="hero hero--primary">
      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://stablocks.com"
            target="_blank"
            rel="noreferrer"
          >
            Learn more at stablocks.com 🔗
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Documentation and News`}
      description="Stablocks documentation for users and developers">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <MainWebsiteBanner />
      </main>
    </Layout>
  );
}
