import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Button from 'react-native-button';

import Api from './Api';

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
    this.api = new Api();
  }

  onPressGetJoke() {
    this.setState({
      loading: true,
      joke: null
    });

    this.api.getData().then((joke) => {
      this.setState({
        loading: false,
        joke: joke
      })
    });
  }

  render() {
    return (
      <LinearGradient colors={['#52E5E7', '#130CB7']} style={styles.linearGradient}>
        <View style={styles.sectionTop}>
          <Text style={styles.welcome}>
            Welcome to Dad Jokes. Unlimited!
          </Text>

          <Text style={styles.instructions}>
            Hit the button and get a joke!
          </Text>
        </View>

        <View style={styles.sectionMiddle}>
          <Text style={styles.joke}>
            {this.state.joke}
          </Text>
          <ActivityIndicator animating={this.state.loading} color='#002661' size='large'/>
        </View>

        <View style={styles.sectionBottom}>
          <Text style={styles.apiref}>
            Api - https://icanhazdadjoke.com/
          </Text>

          <Button
            style={styles.button}
            title='Hit Me'
            onPress={() => this.onPressGetJoke()}>
            Hit Me
          </Button>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  sectionTop: {
    flexGrow: 1,
    flexShrink: 1,
  },
  sectionMiddle: {
    flexGrow: 1,
    flexShrink: 1,
  },
  sectionBottom: {

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#133333',
    marginBottom: 5
  },
  apiref: {
    textAlign: 'center',
    color: '#DEDEDE',
    marginBottom: 5
  },
  joke: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    color: '#E0FFFF',
    fontSize: 30
  },
  button: {
    width: 300,
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#32CCBC',
    fontSize: 20,
    textAlign: 'center',
    color: '#0E197D',
    borderRadius: 20
  },
  linearGradient: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
});
