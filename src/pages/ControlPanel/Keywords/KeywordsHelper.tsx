import { Badge, LoadingBadge } from '../../../components/Badges';
import { FiArrowDown, FiArrowRight, FiArrowUp } from 'react-icons/fi';
import { HStack, Icon, Switch, Text } from '@chakra-ui/react';

import { Rating } from '../../../components/Rating';

export const getAutoPilotTableCell = (data: any) => {
  const isResearching = data.row.original.researching;
  if (!isResearching) {
    return <Switch isChecked={data.row.original.selected} aria-label='Chat' />;
  }

  return '';
};

export const getRatingTableCell = (data: any) => {
  if (!data.getValue()) return '';
  return <Rating defaultValue={data.getValue()} size='lg' />;
};

export const getCpcTableCell = (data: any) => {
  if (!data.getValue()) return '';
  return `$${data.getValue()}`;
};

export const getSearchVolumeTableCell = (data: any) => {
  if (!data.getValue()) return '';
  return data.getValue().toLocaleString();
};

export const getKeywordTableCell = (data: any) => {
  if (!data.getValue()) return '';

  const isRecommended = data.row.original.recommended;
  const isResearching = data.row.original.researching;

  if (isResearching) {
    return (
      <Text>
        <LoadingBadge
          text='Researching'
          badgeProps={{ colorScheme: 'purple', mr: '2' }}
        />
        {data.getValue()}
      </Text>
    );
  } else if (isRecommended) {
    return (
      <Text>
        {data.getValue()}
        <Badge text='Recommended' badgeProps={{ ml: '2', colorScheme: 'green' }} />
      </Text>
    );
  }

  return data.getValue();
};

export const getCompetitionTableCell = (data: any) => {
  if (!data.getValue()) return '';

  const val = data.getValue();
  const icon =
    val === 'HIGH' ? FiArrowUp : val === 'MEDIUM' ? FiArrowRight : FiArrowDown;

  return (
    <HStack>
      <Icon as={icon} />
      <Text>{val[0].toUpperCase() + val.slice(1).toLowerCase()}</Text>
    </HStack>
  );
};
