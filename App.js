
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import ProductPage from './screens/ProductPage';
import Home from './screens/Home'
import Cart from './screens/Cart'
import ProductDetails from './screens/ProductDetails';
import ShippingDetails from './screens/ShippingDetails';
import ConfirmDetails from './screens/ConfirmDetails';
import UploadProduct from './screens/UploadProduct';
import QuestionPaper from './screens/QuestionPaper';
import QuestionPaperImage from './screens/QuestionPaperImage';
import HomeSearch from './screens/HomeSearch';
import LoginScreen from './screens/LoginScreen';
import PdfScreen from './screens/PdfScreen';
import GetOrder from './screens/GetOrder';
import OrderDetails from './screens/OrderDetails';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

const App = ()=> {

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
 

  if (!loaded) return null;
  
  return (
    <NavigationContainer  theme={theme}>
    
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
       <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="GetOrder" component={GetOrder} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="ProductPage" component={ProductPage} />
        <Stack.Screen name="PdfScreen" component={PdfScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ShippingDetails" component={ShippingDetails} />
        <Stack.Screen name="ConfirmDetails" component={ConfirmDetails} /> 
        <Stack.Screen name="UploadProduct" component={UploadProduct} />
        <Stack.Screen name="QuestionPaper" component={QuestionPaper} />   
        <Stack.Screen name="QuestionPaperImage" component={QuestionPaperImage} />
        <Stack.Screen name="HomeSearch" component={HomeSearch} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;