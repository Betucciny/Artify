import { darkTheme, lightTheme } from '@/utils/themes';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@/views/SplashScreen';
import TabController from '@/views/TabController';
import GenerateScreen from '@/views/GenerateScreen';
import ResultScreen from '@/views/ResultScreen';

export type RootStackParamList = {
  Splash: undefined;
  Tabs: undefined;
  Generate: undefined;
  Result: {
    styleImageUri: string;
    imageUri: string;
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === 'dark'
      ? darkTheme
      : lightTheme;


  


  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Tabs" component={TabController} options={{ headerShown: false }} />
          <Stack.Screen name="Generate" component={GenerateScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
