import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class Heading extends Component {
  render(){
    return(
      <View style={{marginTop: 0, marginLeft: 620, marginRight: 620}}>
      <Text> DJ Audio Mixer App </Text>
      </View>
    );
  }
}

class ColorButton1 extends Component {
  displayAlert= ()=>{
    alert("Playing JAM 1");
  }
  render(){
    return(
      <View style={{marginTop: 50, marginLeft: 580, width: 200}}>
      <Button title="JAM 1" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton2 extends Component {
  displayAlert= ()=>{
    alert("Playing JAM 2");
  }
  render(){
    return(
      <View style={{marginTop: 10, marginLeft: 580, width: 200}}>
      <Button title="JAM 2" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton3 extends Component {
  displayAlert= ()=>{
    alert("Playing JAM 3");
  }
  render(){
    return(
      <View style={{marginTop: 10, marginLeft: 580, width: 200}}>
      <Button title="JAM 3" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton4 extends Component {
  displayAlert= ()=>{
    alert("Playing JAM 4");
  }
  render(){
    return(
      <View style={{marginTop: 10, marginLeft: 580, width: 200}}>
      <Button title="JAM 4" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton5 extends Component {
  displayAlert= ()=>{
    alert("Playing JAM 5");
  }
  render(){
    return(
      <View style={{marginTop: 10, marginLeft: 580, width: 200}}>
      <Button title="JAM 5" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}

class ColorButton6 extends Component {
  displayAlert= ()=>{
    alert("Time To Stop!");
  }
  render(){
    return(
      <View style={{marginTop: 220, marginLeft: 580, width: 200}}>
      <Button title="Dont Kill The Party" color={this.props.color} onPress={this.displayAlert}/>
      </View>
    );
  }
}
export default class App extends React.Component {
  render() {
    return(
      <View style={{marginTop: 0}}>
      <Heading/>
      <ColorButton1 color="blue"/>
      <ColorButton2 color="brown"/>
      <ColorButton3 color="green"/>
      <ColorButton4 color="yellow"/>
      <ColorButton5 color="orange"/>
      <ColorButton6 color="red"/>
      </View>
    );
  }
}
