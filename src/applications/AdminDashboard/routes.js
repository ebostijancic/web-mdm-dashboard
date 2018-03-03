import Dashboard from '../../containers/HomeDashboard'
import Devices from '../../containers/Devices'
import Invitations from '../../containers/Invitations'
import Files from '../../containers/Files'
import About from '../../containers/About'
import Settings from '../../containers/Settings'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard,
    exact: true
  },
  {
    path: '/devices',
    name: 'Devices',
    component: Devices,
    exact: true
  },
  {
    path: '/invitations',
    name: 'Invitations',
    component: Invitations,
    exact: true
  },
  {
    path: '/files',
    name: 'Files',
    component: Files,
    exact: true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    exact: false
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    exact: false
  }
]

export default routes