import {
  EmptyState,
  StructuredList,
  StructuredListCell,
  StructuredListIcon,
  StructuredListItem,
} from '@saas-ui/react';
import { FiEdit3, FiUsers, FiXCircle } from 'react-icons/fi';

import { AddTopic } from './AddTopic';
import { Button } from '@chakra-ui/react';
import { ControlPanelContext } from '../ControlPanelContext';
import { FaChevronRight } from 'react-icons/fa';
import { Topic } from '../../../types/Topic';
import { useContext } from 'react';

export const TopicsList = () => {
  const { state } = useContext(ControlPanelContext);

  const renderListItem = (t: Topic) => (
    <StructuredListItem onClick={(x: any) => console.log('item')}>
      <StructuredListIcon
        as={FiXCircle}
        size='4'
        onClick={() => console.log('delete')}
      />
      <StructuredListCell flex='1'>{t.subject}</StructuredListCell>
      <StructuredListIcon as={FaChevronRight} size='4' />
    </StructuredListItem>
  );

  return <StructuredList>{state.topics.map(renderListItem)}</StructuredList>;
};
