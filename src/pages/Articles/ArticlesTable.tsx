import { ColumnDef, DataTable, EmptyState, StructuredList } from '@saas-ui/react';
import { DataGrid, Page, PageHeader } from '@saas-ui-pro/react';
import { getStatusTableCell, getTitleTableCell } from './ArticlesHelper';

import { Article } from '../../types/Article';
import { ArticlesContext } from './ArticlesContext';
import { FiEdit3 } from 'react-icons/fi';
import { useContext } from 'react';

export const ArticlesTable = () => {
  const { state } = useContext(ArticlesContext);

  const columns: ColumnDef<Article>[] = [
    {
      accessorKey: 'title',
      header: 'Tile',
      cell: getTitleTableCell,
    },
    {
      accessorKey: 'status',
      header: '',
      cell: getStatusTableCell,
    },
  ];

  const renderBody = () =>
    !state.articles.length ? (
      <EmptyState
        colorScheme='primary'
        icon={FiEdit3}
        title='You have no articles'
        description='Add one to get started!'
      />
    ) : (
      <DataGrid<any> columns={columns} data={state.articles} />
    );

  return (
    <Page borderRightWidth='1px' maxW='35%'>
      <PageHeader title='Articles' />
      {renderBody()}
    </Page>
  );
};
