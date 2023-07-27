import { AppShell, NavItem, Sidebar, SidebarSection } from '@saas-ui/react';
import {
  DataGrid,
  DataGridPagination,
  Page,
  PageBody,
  PageHeader,
} from '@saas-ui-pro/react';

import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <Page>
      <PageHeader title='Users' />
      <PageBody p='0'>
        <DataGrid
          isHoverable
          isSelectable
          isSortable
          columns={[
            { id: 'name', header: 'Name' },
            { id: 'role', header: 'Role' },
            // {
            //   id: 'actions',
            //   // width: '100px',
            //   Cell: () => <Button>Edit</Button>,
            // },
          ]}
          data={[{ name: 'Renata Alink', role: 'Founder' }]}
        >
          <DataGridPagination />
        </DataGrid>
      </PageBody>
    </Page>
  );
};
