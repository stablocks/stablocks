import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

import cannyScript from './cannyScript';
import clsx from 'clsx';
import styles from './styles.module.css';

const BOARD_TOKEN = '20494423-3afc-8dec-9638-fa0e202b1349';

export default function FeatureRequests({
  basePath,
}: {
  basePath: string;
}): JSX.Element {
  useEffect(() => {
    cannyScript();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {Canny} = window as any;
    Canny('render', {
      boardToken: BOARD_TOKEN,
      basePath,
    });
  }, [basePath]);

  return (
    <Layout title="Feature Requests" description="Stablocks Feature Requests">
      <main
        className={clsx('container', 'margin-vert--lg', styles.main)}
        data-canny
      />
    </Layout>
  );
}