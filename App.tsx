import { Text, View, StatusBar } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });
  return fontsLoaded? ((
    <View style={{flex:1, alignItems:'center', justifyContent: 'center', backgroundColor:'#202024' }} >
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={{fontFamily:'Roboto_700Bold', color:'#E1E1E6'}}>Open up App.tsx to start working on your app!</Text>
    </View>
  )) : <View />;
}


