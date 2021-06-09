import React, { Component } from "react"
import { View, Text } from "react-native"

export default class DetailScreen extends Component{

    constructor(props){
        super(props);
        // console.log(this.props.route.params.obj);
    }

    componentDidMount(){
        console.log(this.props.route.params.obj);
    }

    render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
}}