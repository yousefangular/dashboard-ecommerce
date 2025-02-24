import { NavItem } from './nav-item/nav-item';


export const navItems: NavItem[] = [

  {
    displayName: 'Dashboard',
    iconName: 'solar:widget-add-line-duotone',
    route: '/dashboard',
  },
  {
    displayName: 'list-products',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/list-products',
  },
  {
    displayName: 'list-comments',
    iconName: 'ic:twotone-comment',
    route: '/ui-components/list-comments',
  },
  {
    displayName: 'list-users',
    iconName: 'mdi:user-tie',
    route: '/ui-components/list-users',
  },
  {
    displayName: 'list-carts',
    iconName: 'solar:cart-bold-duotone',
    route: '/ui-components/list-carts',
  },
  {
    displayName: 'Login',
    iconName: 'solar:login-3-line-duotone',
    route: '/authentication/login',
  }
];
