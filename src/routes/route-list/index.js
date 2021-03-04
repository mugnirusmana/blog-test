//PRIVATE PAGE
import Dashboard from './../../pages/dashboard';

//PUBLIC ROUTE
import Login from './../../pages/login';

const privateRoute = [ // this route need auth and role permission
  {
    path: '/dashboard',
    component: Dashboard,
    isExact: true,
    role: 'all',
  },
];

const publicRoute = [ // this route don't need auth and role
  {
    path: '/',
    component: Login,
    isExact: true,
  },
];

export { privateRoute, publicRoute };
