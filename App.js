/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
        
        flag:12,
        arr:[],
        
        email:'',
        password:'',

    }

}


handleEmail = (text) => {
  this.setState({ email: text })
}

handlePassword = (text) => {
  this.setState({ password: text })
}

myOnPress = () =>{


  // Alert.alert(this.state.password);


}

render(){

  // Alert.alert('render');

  return (

    <View style={{flex:1,flexDirection: "column"}}>

      <View style={{ flex: 0.50,flexDirection: "row",backgroundColor:'red' }}>

      <View style={{ flex: 0.50,backgroundColor:'purple' }}>

      </View>

      <View style={{ flex: 0.50,backgroundColor:'black' }}>

      <View style={{ flex: 0.50,flexDirection:'row',backgroundColor:'yellow' }}>

          <View style={{ flex: 0.50,backgroundColor:'green' }}>


            </View>

            <View style={{ flex: 0.50,backgroundColor:'orange' }}>


          </View>

      </View>

      <View style={{ flex: 0.50,flexDirection:'row',backgroundColor:'white' }}>

            <View style={{ flex: 0.50,backgroundColor:'red' }}>

                    

            </View>
            <View style={{ flex: 0.50,backgroundColor:'blue' }}>

                    

            </View>


      </View>

      </View>

      </View>
      
      <View style={{ flex: 0.50, backgroundColor:'orange' }}>

      


      </View>

      

    </View>




  );

  
 }

 componentDidMount() {

  this.setState({
    flag:45
  });

  // console.log(this.state.flag);
  // console.warn(this.state.flag);

  var a = 123;
  var b = 'Akhzar';

  var objIrbaz = {
    id:1,
    name:'Irbaz',
    rollno:99,
    class:'BCS',
    campus:'NCBAE',
    marks:'88'
  };

  var arr = [objIrbaz,12,34,67];


}

}

module.exports=App;



const styles = StyleSheet.create({
  saboor:{
     backgroundColor:'red', 
      alignContent:'center',
      textAlign:'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '600',
  },
});