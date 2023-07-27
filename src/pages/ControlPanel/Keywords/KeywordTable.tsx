import { ColumnDef, DataGrid } from '@saas-ui-pro/react';
import { Switch, Tooltip } from '@chakra-ui/react';
import {
  getAutoPilotTableCell,
  getCompetitionTableCell,
  getCpcTableCell,
  getKeywordTableCell,
  getRatingTableCell,
  getSearchVolumeTableCell,
} from './KeywordsHelper';

import { ControlPanelContext } from '../ControlPanelContext';
import { DataTable } from '@saas-ui/react';
import { Keyword } from '../../../types/Keyword';
import { Rating } from '../../../components/Rating';
import { useContext } from 'react';

export const KeywordTable = () => {
  const { state } = useContext(ControlPanelContext);

  const columns: ColumnDef<Keyword>[] = [
    {
      accessorKey: 'keyword',
      header: 'Keyword',
      cell: getKeywordTableCell,
      size: 400,
    },
    {
      accessorKey: 'searchVolume',
      header: 'Search Volume',
      cell: getSearchVolumeTableCell,
    },
    {
      accessorKey: 'costPerClick',
      header: 'Cost Per Click',
      cell: getCpcTableCell,
    },
    {
      accessorKey: 'competition',
      header: 'Competition',
      cell: getCompetitionTableCell,
    },
    {
      accessorKey: 'rating',
      header: 'Rating',
      cell: getRatingTableCell,
    },
    {
      id: 'action',
      header: () => (
        <Tooltip
          label={`We'll automatically target these keywords when generating your articles.`}
        >
          Auto-Pilot
        </Tooltip>
      ),
      cell: getAutoPilotTableCell,
      size: 100,
    },
  ];

  return <DataGrid<any> columns={columns} data={state.selectedKeywords} />;
};
