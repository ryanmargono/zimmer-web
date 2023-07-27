import { ControlPanelProvider } from './ControlPanelContext';
import { KeywordsPage } from './Keywords/KeywordsPage';
import { SplitPage } from '@saas-ui-pro/react';
import { TopicsPage } from './Topics/TopicsPage';

export const ControlPanel = () => {
  return (
    <ControlPanelProvider>
      <SplitPage>
        <TopicsPage />
        <KeywordsPage />
      </SplitPage>
    </ControlPanelProvider>
  );
};
