import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import BottomTabs from './BottomTabs';
import Dr from '../Components/Dr';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
   <></>
      // <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      //   <Drawer.Screen name="Tab" component={BottomTabs}  />

      // </Drawer.Navigator>
   
  );
}
