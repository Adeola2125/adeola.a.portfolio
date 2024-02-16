// component

// ----------------------------------------------------------------------
const user_type = JSON.parse(localStorage.getItem("auth")) || {}
const navConfig = [
  {
    title: 'dashboard',
    path: '/app/dashboard',
    icon: '/assets/icons/home.svg',
    type: 'both',
    iconActive: '/assets/icons/home_active.svg',
  },
  {
    title: 'customers',
    path: '/dashboard/customers',
    icon: '/assets/icons/users.svg',
    type: 'both',
    iconActive: '/assets/icons/users_active.svg'
  },
  {
    title: user_type.type ==='logistic' ? 'drivers/riders' : 'drivers',
    path: '/dashboard/driver',
    icon: '/assets/icons/driver.svg',
    type: 'both',
    iconActive: '/assets/icons/driver_active.svg'

  },
  {
    title: 'vehicles',
    path: '/dashboard/vehicles',
    icon: '/assets/icons/vehicle.svg',
    type: 'both',
    iconActive: '/assets/icons/vehicles_active.svg'

  },
  {
    title: 'route',
    path: '/dashboard/route',
    icon: '/assets/icons/routes.svg',
    type: 'both',
    iconActive: '/assets/icons/routes_active.svg'

  },
  {
    title: 'charter',
    path: '/dashboard/charter',
    icon: '/assets/icons/bus.svg',
    iconActive: '/assets/icons/bus_active.svg',
    type: 'trips',
  },
  {
    title: 'operations',
    path: '/dashboard/operations',
    icon: '/assets/icons/operations.svg',
    iconActive: '/assets/icons/operations_active.svg',
    type: 'both',

  },
  {
    title: 'wallet',
    path: '/dashboard/wallet',
    icon: '/assets/icons/credit-card.png',
    iconActive: '/assets/icons/credit-cardActive.png',
    type: 'both',

  },
  {
    title: 'administrations',
    path: '/dashboard/administrations',
    icon: '/assets/icons/adminicon.svg',
    iconActive: '/assets/icons/admin_panel_settings.png',
    type: 'both',
  },
  {
    title: 'settings',
    path: '/dashboard/settings',
    icon: '/assets/icons/settings.svg',
    iconActive: '/assets/icons/settings_active.svg',
    type: 'both',

  },
  {
    title: 'incremental insight',
    path: '/dashboard/incremental_insight',
    icon: '/assets/icons/bar-chart.png',
    iconActive: '/assets/icons/bar-chartActive.png',
    type: 'both',

  },
  {
    title: 'subscription',
    path: '/dashboard/subscription',
    icon: '/assets/icons/award.png',
    iconActive: '/assets/icons/awardActive.png',
    type: 'both',

  },
];

export default navConfig
.filter(el => {
  if (el.type === 'trips' && (!user_type.type || user_type.type==='trips')) return true;
  if (el.type === 'both') return true;
  return false;
});
