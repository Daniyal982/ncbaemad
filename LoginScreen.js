import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';


var Header=require('./Header');
var Loader=require('./Loader');
const window = Dimensions.get('window');
const DEVICE_WIDTH=window.width;
const DEVICE_HEIGHT=window.height;
const buttonWidth=DEVICE_WIDTH/2-50;
var backArrow=require('./Icons/backArrow_2.png');
var fbPic=require('./Icons/Fb.png');
var ytubePic=require('./Icons/yTube.png');
var twitterPic=require('./Icons/twitterIcon.png');

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import SignUpScreen from './SignUpScreen.js'

// Fire base
// import * as firebaseObj from 'firebase';
// import {firebaseConfig} from './config';

// const facebookProvider = new firebaseObj.auth().FacebookAuthProvider();
// var facebookProvider = new firebaseObj.auth.FacebookAuthProvider();

// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '828372240381-rggcb30p6r9a7238t454acqi5jttog7d.apps.googleusercontent.com',
// });


// if (!firebaseObj.apps.length){
// 	firebaseObj.initializeApp(firebaseConfig);
// }

var flagGlobal = 0;


// import SoundPlayer from 'react-native-sound-player'

class LoginScreen extends Component{

  constructor(props){
    super(props);
    // this.props.navigator.setOnNavigatorEvent(this.onNavigationEvent.bind(this));

    this.state = {
      email:'',
      pwd:'',
      flag:0,
    }
}

componentDidMount() {

  try {
    // play the file tone.mp3
    // SoundPlayer.playSoundFile('tone', 'mp3')
    // or play from url
  // SoundPlayer.playUrl('https://bbuseruploads.s3.amazonaws.com/f6a5f6a2-066e-49f7-ad96-5d15d2d4d821/downloads/ce3a24e0-9c13-4e2f-868b-e26695f5c738/qaaf-rukoo03.mp3?Signature=SlUP%2Fe1GkpIP14I3mEahHxmquh8%3D&Expires=1618654239&AWSAccessKeyId=AKIA6KOSE3BNJRRFUUX6&versionId=bC.NUmwRI5ikm5joCoApYLVYXBWbeVGC&response-content-disposition=attachment%3B%20filename%3D%22qaaf-rukoo03.mp3%22')
  } catch (e) {
    console.log(`cannot play the sound file`, e)
  }


  var JSON = {
    glossary: {
    title:"example glossary",
    GlossDiv: {
    title: {
    ISO: ["9004:2004","9010:2010",{newvalue:["9005:2005","9006:2006"]}],
    },
    GlossList: {
    GlossEntry: {
    ID: "SGML",
    SortAs: "SGML",
    GlossTerm: "Standard Generalized Markup Language",
    Acronym: {dear: ["9003:2003"]},
    Abbrev: "ISO 9002:2002",
    GlossDef: {
      para:[{dearest:["2008:2008"]},{dear:[{},"9009:2009"]}], GlossSeeAlso: ["9001:2001", "9007:2007"]
    },
    GlossSee: "markup",
    }
    }
    }
  }
  }

  // Question 1
  // Alert.alert(''+JSON.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso[0]);

  // Question 2
  // Alert.alert(''+JSON.glossary.GlossDiv.GlossList.GlossEntry.Abbrev);

  // Question 3
  // Alert.alert(''+JSON.glossary.GlossDiv.GlossList.GlossEntry.Acronym.dear[0]);

  // Question 4
  // Alert.alert(''+JSON.glossary.GlossDiv.title.ISO[0]);

  // Question 5
  // Alert.alert(''+JSON.glossary.GlossDiv.title.ISO[2].newvalue[0]);

  // Question 6
  // Alert.alert(''+JSON.glossary.GlossDiv.title.ISO[2].newvalue[1]);

  // Question 7
  // Alert.alert(''+JSON.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso[1]);

  // Question 8
  // Alert.alert(''+JSON.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para[0].dearest);

  // Question 9
  // Alert.alert(''+JSON.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para[1].dear[1]);

  // Question 10
  // Alert.alert(''+JSON.glossary.GlossDiv.title.ISO[1]);

  // Question 1

  // Question 1:

  // var arrayQuran = [{key:0, id:1, ParaName:”First Para”,SurahNameUrdu:”فاتحہ”,SurahNameEnglish:”Al Fatiha”}, {key:1, id:2, ParaName:”First Para”,SurahNameUrdu:”البقره”,SurahNameEnglish:”Al Baqarah”}];

  // var arrayQuran = [
  //   {
  //     key:0,
  //     title:'Quran',
  //   data:{
  //   {key:0, id:1, ParaName:”First Para”,SurahNameUrdu:”فاتحہ”,SurahNameEnglish:”Al Fatiha”},
  //   {key:1, id:2, ParaName:”First Para”,SurahNameUrdu:”البقره”,SurahNameEnglish:”Al Baqarah”}
  //   }
  //   },

  //   { // Etc
  //     key:1,
  //     title:'Quran',
  //   data:{
  //   {key:0, id:1, ParaName:”First Para”,SurahNameUrdu:”فاتحہ”,SurahNameEnglish:”Al Fatiha”},
  //   {key:1, id:2, ParaName:”First Para”,SurahNameUrdu:”البقره”,SurahNameEnglish:”Al Baqarah”}
  //   }
  //   }

  //   ];


  this.setState({flag:19});
  flagGlobal = 20;




  // firebaseObj.auth().createUserWithEmailAndPassword('testuser1@gmail.com', '123456')
  // .then((userCredential) => {
  //   // Signed in
  //   // var user = userCredential.user;
  //   // ...
  //   Alert.alert('New User created Successfully');
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ..
  //   Alert.alert(errorMessage);
  // });



  // firebaseObj.auth().signInWithEmailAndPassword('mytestuser@gmail.com', '123456')
  // .then((userCredential) => {
  //   Alert.alert('Successfully Signed In');
  //   // Signed in
  //   // var user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   Alert.alert(errorMessage);
  // });


  // firebaseObj.auth().onAuthStateChanged((user)=>{
  //   if(user){

  //     Alert.alert(user.uid);


  //   }else{

  //     Alert.alert('User is not signed In');

  //   }
  // });





  // firebaseObj.auth().signOut().then(() => console.log('User signed out!'));
  









    // return fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('response is = ');
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

}

signInSubmit(){


  this.props.navigation.navigate('SignUpScreen');

  // Alert.alert('errorMessage');

  // firebaseObj.auth().signInWithPopup(facebookProvider).then((result,error)=>{
  //   if(error){
  //     Alert.alert(error);
  //   }else{
  //     Alert.alert(result);
  //   }
  // })





  // firebaseObj.auth().signInWithEmailAndPassword(this.state.email, this.state.pwd)
  // .then((userCredential) => {
  //   Alert.alert('Successfully Signed In');
  //   // Signed in
  //   // var user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   Alert.alert(errorMessage);
  // });




  // this.props.navigation.navigate('Screen4');

  // this.props.navigator.push({
  // screen: "Screen4",
  // navigatorStyle: {
  //   navBarHidden:true,
  // },
  // });

}

emailTextChanged(text){
  this.setState({email:text});
  // Alert.alert('he'+text);
}

passwordTextChanged(text){
  this.setState({pwd:text});
}

render(){
  return(
    <View style={styles.outerContainer}>

    <Text> flag = {this.state.flag} flagGlobal = {flagGlobal} </Text>

    <KeyboardAwareScrollView>
          <View style={{
            marginTop:120,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            flex:2,
          }}>
          <Text style={{
            fontSize:20,
            fontWeight:'700',
            color:'#38803B',
            textDecorationLine:'underline',
          }}>Sing in</Text>

          <TouchableOpacity onPress={()=> {this.props.navigator.push({
            screen:"SignUpScreen",
            navigatorStyle:{
              navBarHidden:true,
            },
          })
         }} style={{
            marginLeft:15,
          }}>
          <Text style={{
            fontSize:20,
            color:'#CC181E',
            fontWeight:'700',
          }}>SingUp</Text>
          </TouchableOpacity>

          </View>

          <View style={{
            marginTop:20,flex:1
          }}>
          <TextInput
          placeholder="Email"
          underlineColorAndroid='transparent'
          onChangeText={(text)=>this.emailTextChanged(text)}

           style={styles.inputStyle}/>

           <TextInput
           placeholder="password"
           secureTextEntry={true}
           underlineColorAndroid='transparent'
           onChangeText={(text)=>this.passwordTextChanged(text)}
           style={styles.inputStyle}/>

          </View>


            <View style={{
              marginTop:15,
              alignItems:'flex-end',
              justifyContent:'flex-end',
              marginRight:50,flex:1,
            }}>
            <TouchableOpacity>
              <Text style={{
                color:'#38803B',
                fontWeight:'600',
              }}> Forget password? </Text>
            </TouchableOpacity>
            </View>

            <View style={{
              marginTop:30,
              alignItems:'center',
              justifyContent:'center',flex:1
            }}>
              <TouchableOpacity onPress={()=>this.signInSubmit()}
              style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#38803B',
                borderWidth:1,
                borderColor:'#38803B',
                borderRadius:30,
              }}>
              <Text style={{
                marginTop:7,
                marginBottom:7,
                marginLeft:40,
                marginRight:40,
                color:'white',
                fontWeight:'600'
              }}>Login</Text>

              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:20,marginLeft:50,marginRight:50}}>
              <View style={{flex:1,backgroundColor:'#CC181E',height:1}}/>
              <Text style={{
                marginLeft:2,
                marginRight:2,
                color:'#CC181E',
                fontWeight:'600',
              }}> Sign in with social </Text>
              <View style={{flex:1,backgroundColor:'#CC181E',height:1}}/>
            </View>


              <View style={{
                marginTop:20,
                flexDirection:'row',
                marginRight:50,
                marginLeft:50,
                justifyContent:'space-around',flex:1
              }}>
                  <View style={{
                    width:50,
                    height:50,
                    backgroundColor:'white',
                    borderRadius:25,
                  }}>
                  <Image source={fbPic} style={{width:50,height:50}}/>
                  </View>

                  <View style={{
                    width:50,
                    height:50,
                    backgroundColor:'white',
                    borderRadius:25,
                  }}>
                  <Image source={ytubePic} style={{width:50,height:50}}/>
                  </View>

                  <View style={{
                    width:50,
                    height:50,
                    backgroundColor:'white',
                    borderRadius:25,
                  }} >
                  <Image source={twitterPic} style={{width:50,height:50}}/>
                  </View>

              </View>



              <View style={{
              marginTop:30,
              backgroundColor:'#38803B',flex:2,
              // borderBottomWidth:10,
              // borderTopWidth:100,
              // height:20,
              // borderRightWidth:40,

              borderTopColor:'blue',
              // borderBottomWidth:20,

              height:DEVICE_HEIGHT/4,
              }}>
              <View style={{
                borderTopWidth:80,
                borderLeftWidth:DEVICE_WIDTH,
                borderLeftColor:'white',
                borderTopColor:'#38803B',
                // backgroundColor:'orange',
                transform: [
                  {rotate: '180deg'}
                  ]
              }}/>
              <View style={{
                position:'absolute',
                left:'43%',
                top:'5%'
              }}>
                <TouchableOpacity onPress={()=>this.signInSubmit()} style={{
                  width:60,
                  height:60,
                  borderWidth:1,
                  borderColor:'white',
                  backgroundColor:'#38803B',
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:30,
                }}>
                <Image source={backArrow} style={{width:30,height:22}}/>
                </TouchableOpacity>
              </View>

              </View>



      </KeyboardAwareScrollView>

    </View>
  )

}


}


const styles=StyleSheet.create({
outerContainer:{
  flex:1,
  backgroundColor:'white',
  //backgroundColor:'#E7E7E7'
},
inputStyle:{
  backgroundColor:'white', //#B4B4B4
  marginLeft:50,
  marginRight:50,
  height:50,
  borderWidth:1.5,
  borderRadius:5,
  borderColor:'green',   // #BBBBBB
  paddingLeft:10,
  paddingRight:10,
  marginTop:20,

}
})


module.exports=LoginScreen;
