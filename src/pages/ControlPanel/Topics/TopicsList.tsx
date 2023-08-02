import {
  EmptyState,
  StructuredList,
  StructuredListCell,
  StructuredListIcon,
  StructuredListItem,
} from '@saas-ui/react';

import { ControlPanelContext } from '../ControlPanelContext';
import { FaChevronRight } from 'react-icons/fa';
import { FiXCircle } from 'react-icons/fi';
import { Topic } from '../../../types/Topic';
import { useContext } from 'react';

export const TopicsList = () => {
  const { state, selectTopic, deleteTopic } = useContext(ControlPanelContext);

  const renderListItem = (t: Topic) => (
    <StructuredListItem>
      <StructuredListIcon as={FiXCircle} size='4' onClick={() => deleteTopic(t)} />
      <StructuredListCell onClick={() => selectTopic(t)} flex='1'>
        {t.subject}
      </StructuredListCell>
      <StructuredListIcon as={FaChevronRight} size='4' />
    </StructuredListItem>
  );

  return <StructuredList>{state.topics.map(renderListItem)}</StructuredList>;
};
