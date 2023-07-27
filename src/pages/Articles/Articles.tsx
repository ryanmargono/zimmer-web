import { Page, SplitPage } from '@saas-ui-pro/react';

import { Article } from './Article';
import { ArticlesProvider } from './ArticlesContext';
import { ArticlesTable } from './ArticlesTable';

export const Articles = () => {
  return (
    <ArticlesProvider>
      <SplitPage>
        <ArticlesTable />
        <Article />
      </SplitPage>
    </ArticlesProvider>
  );
};
