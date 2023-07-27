import { Badge, Button, Switch, Tooltip } from '@chakra-ui/react';
import { Beacon, ColumnDef, Page, PageHeader, Toolbar } from '@saas-ui-pro/react';

import { ControlPanelContext } from '../ControlPanelContext';
import { DataTable } from '@saas-ui/react';
import { Keyword } from '../../../types/Keyword';
import { KeywordTable } from './KeywordTable';
import { Rating } from '../../../components/Rating';
import { useContext } from 'react';

export const KeywordsPage = () => {
  const { state } = useContext(ControlPanelContext);

  if (!state.selectedKeywords.length) {
    return <Page></Page>;
  }

  return (
    <Page>
      <PageHeader
        title='Keywords'
        toolbar={
          <Toolbar>
            <Button position='relative' disabled>
              Auto-researching keywords in 24hrs
              <Beacon
                size='sm'
                colorScheme='primary'
                position='absolute'
                top='0'
                right='0'
              />
            </Button>
          </Toolbar>
        }
      />
      <KeywordTable />
    </Page>
  );
};
