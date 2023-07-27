import { Page, PageHeader, Toolbar } from '@saas-ui-pro/react';

import { AddTopic } from './AddTopic';
import { ControlPanelContext } from '../ControlPanelContext';
import { EmptyState } from '@saas-ui/react';
import { FiEdit3 } from 'react-icons/fi';
import { TopicsList } from './TopicsList';
import { useContext } from 'react';

export const TopicsPage = () => {
  const { state } = useContext(ControlPanelContext);

  const renderBody = () =>
    state.topics.length ? (
      <TopicsList />
    ) : (
      <EmptyState
        colorScheme='primary'
        icon={FiEdit3}
        title='You have no topics'
        description='Add one to get started!'
        actions={<AddTopic />}
      />
    );

  return (
    <Page borderRightWidth='1px' maxW='30%'>
      <PageHeader
        title='Topics'
        toolbar={
          <Toolbar>
            <AddTopic />
          </Toolbar>
        }
      />
      {renderBody()}
    </Page>
  );
};
