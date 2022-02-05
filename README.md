# CodingWithMoshToDo

//in this video https://www.youtube.com/watch?v=0-S5a0eXPoc&t=4136s&ab_channel=ProgrammingwithMosh
//we're gonna start building our app pages and learn
// Dimensions
// Device orientationflexbox
// absolute and relative positioning

#you can put percentages for width and height

<!--
<View style={styles.AndroidSafeArea}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70,
      }}></View>
      <StatusBar style="auto" />
    </View> -->

<!-- const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, -->

#this is the style for an android safe area since a SafeAreaView only works with Iphone

  <!-- AndroidSafeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});  -->

#how to get the device window size (you can also do screen)
#screen gives FULL screen where window gives slightly smaller

  <!-- console.log(Dimensions.get('window')); -->

<!-- import {useDimensions} from '@react-native-community/hooks' -->

#FOR IOS, but for android the above style for safe area works fine with different dimensions this is the preffered way to check dimensions if the app needs to be both portrait and landscape

<!-- {
  "expo": {
    "name": "CodingWithMoshToDo",
    "slug": "CodingWithMoshToDo",
    "version": "1.0.0",
    "orientation": "default", -->

    #default orientation allows for support for both portrait and landscape

<!--
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
      </View> -->

      #here, you can see 3 seperate views in 1 big view, using the flex property, when they're all at 1 they will all fill 1/3 of the total view, but if you change one to 2 for example it will fill more of the view and the other 2 will be smaller.
