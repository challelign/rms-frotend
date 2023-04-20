import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import CustomerListView from 'src/views/customer/CustomerListView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ShareHoldersList from 'src/views/shareholders/shareholdersList';
import TopDepositorList from 'src/views/top_depositors/topDepositorsList';
import DormantCustomerListView from 'src/views/Dormant Accounts/dormant/DormantListView';
import Below500List from 'src/views/Below500Thousand/bowlow500/Below500List';
import PotentialCustomerStatus from 'src/views/potentialCustomer/potentialCustomersAndStatus';
import PotentialCustomerList from 'src/views/potentialCustomer/potentialCustomerList';
import LoggedUser from 'src/views/loggedUser/loggedUser';
import Fcy from 'src/views/fcy/fcyTransaction';
const routes = [
  {
    path: 'rms2/app',
    element: <DashboardLayout />,
    children: [
      { path: 'customers', element: <CustomerListView /> },
      { path: 'shareholders', element: <ShareHoldersList /> },
      { path: 'top_depositors', element: <TopDepositorList /> },
      { path: 'dormant_account', element: <DormantCustomerListView /> },
      { path: 'below_500_thusand', element: <Below500List /> },
      { path: 'fcy', element: <Fcy /> },
      {
        path: 'potential_customer_status',
        element: <PotentialCustomerStatus />
      },
      { path: 'potential_customer_list', element: <PotentialCustomerList /> },
      { path: 'logged_user', element: <LoggedUser /> },
      { path: '*', element: <NotFoundView /> }
    ]
  },
  {
    path: '/rms2/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/rms2/login" /> },
      { path: '*', element: <NotFoundView /> }
    ]
  }
];

export default routes;
