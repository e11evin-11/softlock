import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Knowledge Base',
    Image: 'TODO',
    description: (
      <>
      Here you can find educational resources
      on operational security and safety online
      (How to set up Tor/VPN, Tails, etc.)
      </>
    )
  },
  {
    title: 'SoftLock Minneapolis',
    Image: require('@site/static/img/logo.png').default,
    description: (
      <>
        TODO
      </>
    ),
  },
  {
    title: 'TODO',
    Image: 'TODO',
    description: (
      <>
        Find third item!
      </>
    ),
  }
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Image} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
