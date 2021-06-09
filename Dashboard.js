
import React, { Component } from "react";
import {View, Text, Button} from 'react-native';

export default class Dashboard extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){

    }

    render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard Screen</Text>

        <Button
          title="Go to Login Screen"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />

      </View>
    );
    }
  }
  