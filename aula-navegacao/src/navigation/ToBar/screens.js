import { Icons } from '../../components/Icons';
import { One } from '../../screens/One';
import { Two } from '../../screens/Two';

export const ToBarTabs = [
  { 
    route: 'One', 
    label: 'One', 
    type: Icons.Ionicons, 
    activeIcon: 'home', 
    inActiveIcon: 'home-outline', 
    component: One 
  },
  { 
    route: 'Two', 
    label: 'Two', 
    type: Icons.Ionicons, 
    activeIcon: 'barbell', 
    inActiveIcon: 'barbell-outline', 
    component: Two 
  },
];