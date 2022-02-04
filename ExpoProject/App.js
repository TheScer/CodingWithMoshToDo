import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,

} from 'react-native';

//in this video https://www.youtube.com/watch?v=0-S5a0eXPoc&t=4136s&ab_channel=ProgrammingwithMosh
//we're gonna start building our app pages and learn
// Dimensions
// Device orientationflexbox
// absolute and relative positioning


export default function App() {
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70,
      }}></View>
      <StatusBar style="auto" />
    </View>
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
 