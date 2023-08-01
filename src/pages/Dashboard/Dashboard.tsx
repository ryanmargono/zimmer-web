import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  FiBookOpen,
  FiClock,
  FiCode,
  FiDollarSign,
  FiEdit3,
  FiRefreshCw,
  FiUserCheck,
} from 'react-icons/fi';
import { Page, PageBody, PageHeader } from '@saas-ui-pro/react';
import {
  Timeline,
  TimelineContent,
  TimelineIcon,
  TimelineItem,
  TimelineSeparator,
  TimelineTrack,
} from '@saas-ui/react';

import { DashboardProvider } from './DashboardContext';
import { RecentActivityTable } from './RecentActivityTable';
import { Stat } from '../../components/Stat';

export const Dashboard = () => {
  return (
    <DashboardProvider>
      <Page variant='hero' colorScheme='primary'>
        <PageHeader
          title='Welcome'
          description={`You've saved enough time to relax on the beach`}
        />
        <PageBody>
          <SimpleGrid columns={1}>
            <SimpleGrid columns={4}>
              <Box>
                <Stat
                  label='Total Dollars Saved'
                  value='$100'
                  icon={FiDollarSign}
                  delta={{ value: '320%', isUpwardsTrend: true }}
                />
              </Box>
              <Box>
                <Stat
                  label='Total Time Saved'
                  value='100'
                  icon={FiClock}
                  delta={{ value: '320%', isUpwardsTrend: true }}
                />
              </Box>
              <Box>
                <Stat
                  label='Words Written'
                  value='1000'
                  icon={FiEdit3}
                  delta={{ value: '320%', isUpwardsTrend: true }}
                />
              </Box>
              <Box>
                <Stat
                  label='Hours of Research Conducted'
                  value='100'
                  icon={FiBookOpen}
                  delta={{ value: '320%', isUpwardsTrend: true }}
                />
              </Box>
            </SimpleGrid>

            <Card>
              <CardHeader>
                <Heading size='md'> Sierra's Feed </Heading>
              </CardHeader>
              <CardBody>
                <RecentActivityTable />
              </CardBody>
            </Card>
          </SimpleGrid>
        </PageBody>
      </Page>
    </DashboardProvider>
  );
};
