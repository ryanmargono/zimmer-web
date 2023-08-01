import { FiBook, FiCloud, FiEdit3, FiSearch } from 'react-icons/fi';
import { HStack, Icon, Text } from '@chakra-ui/react';

import { Badge } from '../../components/Badges';
import { formatDistanceToNow } from 'date-fns';

export const formatActivityTableCreatedAt = (data: any) => {
  return formatDistanceToNow(new Date(data.getValue()), { addSuffix: true }).replace(
    'about ',
    ''
  );
};

export const formatActivityTableStatus = (data: any) => {
  const type = data.row.original.type;

  let icon;
  switch (type) {
    case 'ARTICLE_WRITE':
      icon = FiEdit3;
      break;
    case 'ARTICLE_RESEARCH':
      icon = FiBook;
      break;
    case 'KEYWORD_RESEARCH':
      icon = FiSearch;
      break;
    case 'KEYWORD_GENERATION':
      icon = FiCloud;
      break;
  }

  return (
    <HStack>
      <Icon as={icon} boxSize={5} mr='2' />
      <Text> {data.getValue()} </Text>
    </HStack>
  );
};

export const formatActivityTableDollarsSaved = (data: any) => {
  return (
    <Badge text={`$${data.getValue()}`} badgeProps={{ colorScheme: 'green' }} />
  );
};

export const formatActivityTableTimeSaved = (data: any) => {
  const minutes = data.getValue();
  const hours = minutes / 60;
  const roundedHours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let time = '';
  if (roundedHours > 0 && remainingMinutes > 0) {
    time = `${hours.toFixed(1)} hour${hours > 1 ? 's' : ''}`;
  } else if (roundedHours > 0) {
    time = `${roundedHours} hour${hours > 1 ? 's' : ''}`;
  } else {
    time = `${Math.round(remainingMinutes)} minute${
      Math.round(remainingMinutes) > 1 ? 's' : ''
    }`;
  }

  return <Badge text={time} badgeProps={{ colorScheme: 'purple' }} />;
};
