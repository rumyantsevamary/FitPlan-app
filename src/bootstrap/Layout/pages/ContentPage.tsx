import * as React from 'react';
import loadable from '@loadable/component';

const Content = loadable(
  () => import('../../../modules/content/components/Content/Content'),
  {
    // TODO: Repace with real Loader
    fallback: <div>Loading</div>
  }
);

const ContentPage: React.FC = () => {
  return <Content />;
};

export default ContentPage;
