//Navigate
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

//screen
import HomeScreen from '../pages/HomeScreen';
import SettingScreen from '../pages/SettingScreen';


//customcomponent
import DrawerContent from '../component/DrawerContent'







const Navigation = createDrawerNavigator({
    Home: {
        screen: HomeScreen

    },
    Setting: {
        screen: SettingScreen
    },
    
},{
    contentComponent: DrawerContent,
})

const App = createAppContainer(Navigation);

export default App;