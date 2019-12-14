import * as React from 'react';
import loadable from '@loadable/component';

const Trainer = loadable(
  () => import('../../../modules/trainer/components/Trainer/Trainer'),
  {
    // TODO: Repace with real Loader
    fallback: <div>Loading</div>
  }
);

const TrainerPage: React.FC = () => {
  return <Trainer />;
};

export default TrainerPage;
