import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image?: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Knowledge Base',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
      Learn more about operational security and safety online
      (How to set up Tor/VPN, Tails, etc.)
      </>
    ),
    link: './docs'
  },
  {
    title: 'Security Training',
    Image: '',
    Svg: require('@site/static/img/lock.svg').default,
    description: (
      <>
        Sign up for Digital Security training
      </>
    ),
  },
  {
    title: 'TODO',
    Svg: require('@site/static/img/book.svg').default,
    description: (
      <>
        Find third item!
      </>
    ),
  }
];

function Feature({title, description,link,Svg}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href={link} className={styles.featureBkgd}>
        <Svg className={styles.featureImage} role="img"/>
      </a>
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
