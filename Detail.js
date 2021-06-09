
import React, { Component } from "react";
import {View, Text, Button} from 'react-native';

export default class Detail extends Component {

    constructor(props){
        super(props);
        console.log(this.props.route.params.id);
        console.log(this.props.route.params.name);
        console.log(this.props.route.params.class);
    }

    componentDidMount(){
        console.log(this.props.route.params.id);
        console.log(this.props.route.params.name);
        console.log(this.props.route.params.class);
    }

    render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>Detail Screen Student ID = {this.props.route.params.id} and 

            Student Name is = {this.props.route.params.name}  
            And
            Student Class is = {this.props.route.params.class}

        </Text>

        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
  
      </View>
    );
    }
  }
  