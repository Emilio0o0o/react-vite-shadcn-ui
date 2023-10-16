import TaskPage from '../components/table/tables/taskTable';
import BeerPage from './beer-table-page';
import AlertDemo from '../components/AlertDemo';
import FileDrop from '../components/filedrop/file-upload';
import getBeers from '../components/api-call-test';

export const sidebarNavItems = [
  {
    title: 'Home',
    href: '/',
    component: TaskPage,
  },
  {
    title: 'Bestand uploaden',
    href: '/upload',
    component: FileDrop,
  },
  {
    title: 'Statusoverzicht uitbetalingen',
    href: '/betalingen',
    component: BeerPage,
  },
  {
    title: 'Statusoverzicht burgers',
    href: '/status',
    component: AlertDemo,
  },
  {
    title: 'API Documentatie',
    href: '/api',
    component: getBeers,
  },
];
