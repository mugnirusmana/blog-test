//PUBLIC ROUTE
import Login from './../../pages/login';
import Create from './../../pages/create';
import Edit from './../../pages/edit';

const privateRoute = [ // this route need auth and role permission
  
];

const publicRoute = [ // this route don't need auth and role
  {
    path: '/', //list data
    component: Login,
    isExact: true,
  },
  {
    path: '/create', //create data
    component: Create,
    isExact: false,
  },
  {
    path: '/edit/:id', //edit data
    component: Edit,
    isExact: false,
  },
  // {
  //   path: '/detail/:id', //detail or view data
  //   component: Detail,
  //   isExact: true,
  // },
];

export { privateRoute, publicRoute };
