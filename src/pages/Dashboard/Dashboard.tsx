import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { DashboardContext, DashboardProvider } from './DashboardContext';
import { Page, PageBody, PageHeader } from '@saas-ui-pro/react';

import { DashboardStats } from './DashboardStats';
import { RecentActivityTable } from './RecentActivityTable';
import { useContext } from 'react';

export const Dashboard = () => {
  const { state } = useContext(DashboardContext);
  console.log('STATE:', state);

  return (
    <DashboardProvider>
      <Page variant='hero' colorScheme='primary'>
        <PageHeader
          title='Welcome'
          description={`You've saved enough time to relax on the beach`}
        />
        <PageBody>
          <SimpleGrid columns={1}>
            <DashboardStats />

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
