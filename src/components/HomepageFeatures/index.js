import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'N/A',
    imagePath: '/img/prooheckcpChubby.png',
    description: (
      <>
        N/A
      </>
    ),
  },
  {
    title: 'N/A',
    imagePath: '/img/prooheckcpChubby.png',
    description: (
      <>
        N/A
      </>
    ),
  },
  {
    title: 'N/A',
    imagePath: '/img/prooheckcpChubby.png',
    description: (
      <>
        N/A
      </>
    ),
  },
];

function Feature({imagePath, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imagePath}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
