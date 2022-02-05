import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import {useDimensions} from '@react-native-community/hooks'

//in this video https://www.youtube.com/watch?v=0-S5a0eXPoc&t=4136s&ab_channel=ProgrammingwithMosh
//we're gonna start building our app pages and learn
// Dimensions
// Device orientationflexbox
// absolute and relative positioning


export default function App() {
  //console.log(Dimensions.get('window'));

  return (

      <View style={{
        backgroundColor:'#fff',
        flex: 1 //View will take the entire screen when 1, .5=half
      }}>
        <View style={{
        backgroundColor: 'dodgerblue',
        flex: 2,
        }}/>
        <View style={{
        backgroundColor: 'gold',
        flex: 1,
        }}/>
        <View style={{
        backgroundColor: 'tomato',
        flex: 1,
        }}/>
      </View>


    // <View style={styles.AndroidSafeArea}>
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width: '100%',
    //     height: '30%',
    //   }}></View>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  AndroidSafeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
 