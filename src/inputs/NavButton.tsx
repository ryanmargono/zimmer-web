import { Link, useLocation } from 'react-router-dom';

import { NavItem } from '@saas-ui/react';

export const NavButton = (props: { icon: any; label: string }) => {
  const { icon, label } = props;
  const location = useLocation();
  const path = `/${label.toLowerCase().split(' ').join('-')}`;

  return (
    <Link to={path}>
      <NavItem aria-selected icon={icon} isActive={path === location.pathname}>
        {label}
      </NavItem>
    </Link>
  );
};
