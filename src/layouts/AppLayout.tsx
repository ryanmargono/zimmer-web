import { AppShell, PersonaAvatar, Sidebar, SidebarSection } from '@saas-ui/react';
import { FiBook, FiHome, FiSearch, FiSettings } from 'react-icons/fi';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';

import { NavButton } from '../inputs/NavButton';
import { Outlet } from 'react-router-dom';

export const AppLayout = (props: any) => {
  return (
    <AppShell
      height='$100vh'
      sidebar={
        <Sidebar width='10%'>
          <SidebarSection direction='row'>
            {/* <SaasUILogo width='100px' /> */}
            <Spacer />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={
                  <PersonaAvatar
                    presence='online'
                    size='xs'
                    src='/showcase-avatar.jpg'
                  />
                }
                variant='ghost'
              />
              <MenuList>
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </SidebarSection>
          <SidebarSection flex='1' overflowY='auto'>
            <NavButton label='Home' icon={<FiHome />} />
            <NavButton label='Research' icon={<FiSearch />} />
            <NavButton label='Articles' icon={<FiBook />} />
            <NavButton label='Settings' icon={<FiSettings />} />
          </SidebarSection>
        </Sidebar>
      }
    >
      <Outlet />
    </AppShell>
  );
};
