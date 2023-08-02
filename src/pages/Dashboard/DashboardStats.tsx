import { Box, SimpleGrid } from '@chakra-ui/react';
import { FiBookOpen, FiClock, FiDollarSign, FiEdit3 } from 'react-icons/fi';

import { DashboardContext } from './DashboardContext';
import { Stat } from '../../components/Stat';
import { useContext } from 'react';

const approx = require('approximate-number');

export const DashboardStats = () => {
  const { state } = useContext(DashboardContext);

  return (
    <SimpleGrid columns={4}>
      <Box>
        <Stat
          label='Total Dollars Saved'
          value={`$${approx(state.stats?.moneySaved || 0)}`}
          icon={FiDollarSign}
          delta={{ value: '320%', isUpwardsTrend: true }}
        />
      </Box>
      <Box>
        <Stat
          label='Total Time Saved'
          value={`${approx((state.stats?.minutesSaved || 0) / 60)} hours`}
          icon={FiClock}
          delta={{ value: '320%', isUpwardsTrend: true }}
        />
      </Box>
      <Box>
        <Stat
          label='Words Written'
          value={`${approx(state.stats?.wordsWritten || 0)}`}
          icon={FiEdit3}
          delta={{ value: '320%', isUpwardsTrend: true }}
        />
      </Box>
      <Box>
        <Stat
          label='Time spent Researching'
          value={`${approx((state.stats?.minutesOfResearch || 0) / 60)} hours`}
          icon={FiBookOpen}
          delta={{ value: '320%', isUpwardsTrend: true }}
        />
      </Box>
    </SimpleGrid>
  );
};
