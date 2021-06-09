
import React, { Component } from "react";
import {View, Text, Button, FlatList, TouchableOpacity, Image, Alert} from 'react-native';



const DATA = 

[
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ted Mosby',
    messages: 'We Will Go Out Tomorrow',
    time:'Yesterday',
    imgprofile:'',
    key:0,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Burney Stinson',
    messages: 'Tomorrow Party',
    time:'11:12 PM',
    imgprofile:'',
    key:1,

  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ted Mosby',
    messages: 'We Will Go Out Tomorrow',
    time:'Yesterday',
    imgprofile:'',
    key:2,

  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ted Mosby',
    messages: 'We Will Go Out Tomorrow',
    time:'Yesterday',
    imgprofile:'',
    key:3,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ted Mosby',
    messages: 'We Will Go Out Tomorrow',
    time:'Yesterday',
    imgprofile:'',
    key:4,

  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ted Mosby',
    messages: 'We Will Go Out Tomorrow',
    time:'Yesterday',
    imgprofile:'',
    key:5,

  },


];



export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            dataArray:[],
        }


    }

    UNSAFE_componentWillMount(){
        
    }

    render(){
    return (
      <View>
        <Text>Home Screen</Text>
        <Text>Home Screen Testing</Text>

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Detail',{id:57,name:'Hamza',class:'BCS'})}
        />
        

    <FlatList
        data={this.state.dataArray}

        renderItem={
            ({item,index})=>

        
        <View style={{flex:1,flexDirection:'row'}}>

            <View style={{flex:0.20}}>
            
            <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 150 / 2,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "red"
          }}
          source={require('./imgprofile.png')}
        />
            </View>

            <View style={{flex:0.60}}>

            <Text> {item.id}  </Text>
            <Text> {item.title}  </Text>

            </View>

            <View style={{flex:0.20}}>

            <Text> {item.releaseYear}  </Text>

            </View>

        </View>




          }

        keyExtractor={item => item.id}

        />


      </View>
    );
    }


    componentDidMount(){

        fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
        //   this.setState({ data: json.movies });
        // Alert.alert('API testing');
        console.log(json.movies);
        this.setState({dataArray:json.movies});
        })
        .catch((error) => console.error(error))
        .finally(() => {
        //   this.setState({ isLoading: false });
        });


    }


  }
  