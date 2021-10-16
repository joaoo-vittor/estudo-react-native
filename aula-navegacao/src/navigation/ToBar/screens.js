import { Icons } from '../../components/Icons';
import { One } from '../../screens/One';
import { Training } from '../../screens/Training';

export const ToBarTabs = [
  { 
    route: 'One', 
    label: 'One', 
    type: Icons.Ionicons, 
    activeIcon: 'calendar', 
    inActiveIcon: 'calendar-outline', 
    component: One 
  },
  { 
    route: 'Training', 
    label: 'Training', 
    type: Icons.Ionicons, 
    activeIcon: 'barbell', 
    inActiveIcon: 'barbell-outline', 
    component: Training 
  },
];