import { ColumnDef, DataTable, EmptyState, StructuredList } from '@saas-ui/react';
import { DataGrid, DataGridPagination, Page, PageHeader } from '@saas-ui-pro/react';
import { FiActivity, FiEdit3 } from 'react-icons/fi';
import {
  formatActivityTableCreatedAt,
  formatActivityTableDollarsSaved,
  formatActivityTableStatus,
  formatActivityTableTimeSaved,
} from './DashboardHelper';

import { Article } from '../../types/Article';
import { DashboardContext } from './DashboardContext';
import { useContext } from 'react';

export const RecentActivityTable = () => {
  const { state } = useContext(DashboardContext);

  const columns: ColumnDef<Article>[] = [
    {
      accessorKey: 'update',
      header: 'Activity',
      size: 500,
      cell: formatActivityTableStatus,
    },
    {
      accessorKey: 'minutesSaved',
      header: 'Time Saved',
      // size: 200,
      cell: formatActivityTableTimeSaved,
    },
    {
      accessorKey: 'moneySaved',
      header: 'Dollars Saved',
      // size: 200,
      cell: formatActivityTableDollarsSaved,
    },
    {
      accessorKey: 'createdAt',
      header: '',
      // size: ,
      cell: formatActivityTableCreatedAt,
    },
  ];

  const renderBody = () =>
    !state.historyLogs.length ? (
      <EmptyState
        colorScheme='primary'
        icon={FiActivity}
        title='No recent activity'
        // description='Add one to get started!'
      />
    ) : (
      <DataGrid<any>
        size='lg'
        isHoverable
        columns={columns}
        data={[...state.historyLogs]}
      >
        {/* <DataGridPagination /> */}
      </DataGrid>
    );

  return renderBody();
};
