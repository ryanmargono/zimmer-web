import { Badge, LoadingBadge } from '../../components/Badges';

import { Tooltip } from '@chakra-ui/react';

export const getStatusTableCell = (data: any) => {
  const val = data.getValue();
  if (!val) return '';

  return val === 'Ready' ? (
    <Badge text={val} badgeProps={{ colorScheme: 'green' }} />
  ) : (
    <LoadingBadge text={val} badgeProps={{ colorScheme: 'purple' }} />
  );
};

export const getTitleTableCell = (data: any) => {
  const val = data.getValue();
  if (!val) return '';

  return <Tooltip label={val}>{val.substring(0, 50) + '...'}</Tooltip>;
};
