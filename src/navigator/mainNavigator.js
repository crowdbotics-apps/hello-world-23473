import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial186935Navigator from '../features/Tutorial186935/navigator';
import NotificationList186907Navigator from '../features/NotificationList186907/navigator';
import Settings186906Navigator from '../features/Settings186906/navigator';
import Settings186898Navigator from '../features/Settings186898/navigator';
import UserProfile186896Navigator from '../features/UserProfile186896/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial186935: { screen: Tutorial186935Navigator },
NotificationList186907: { screen: NotificationList186907Navigator },
Settings186906: { screen: Settings186906Navigator },
Settings186898: { screen: Settings186898Navigator },
UserProfile186896: { screen: UserProfile186896Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
