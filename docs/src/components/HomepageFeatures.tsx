import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open-Source',
    image: '/img/undraw_open_source.svg',
    description: (
      <>
        Stablocks is completely open-source, which helps grow the community while
        creating a better product for everyone.
      </>
    ),
  },
  {
    title: 'Modular',
    image: '/img/undraw_modules.svg',
    description: (
      <>
        Modules are a core concept of Stablocks, allowing you to pick which
        software features you want or use them all.
      </>
    ),
  },
  {
    title: 'Own Your Data',
    image: '/img/undraw_data.svg',
    description: (
      <>
        You don't want someone owning your data (and we don't want it either). Stablocks
        puts your important data back in your hands.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
