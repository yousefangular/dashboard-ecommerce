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
    route: '/dashboard/ui-components/list-products',
  },
  {
    displayName: 'list-comments',
    iconName: 'ic:twotone-comment',
    route: '/dashboard/ui-components/list-comments',
  },
  {
    displayName: 'list-users',
    iconName: 'mdi:user-tie',
    route: '/dashboard/ui-components/list-users',
  },
  {
    displayName: 'list-carts',
    iconName: 'solar:cart-bold-duotone',
    route: '/dashboard/ui-components/list-carts',
  },
];
