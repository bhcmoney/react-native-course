import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Button, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDpEXpBS7JEi8YXMbH2_80valcPliotGYo',
      authDomain: 'auth-45440.firebaseapp.com',
      databaseURL: 'https://auth-45440.firebaseio.com',
      projectId: 'auth-45440',
      storageBucket: 'auth-45440.appspot.com',
      messagingSenderId: '634619077989'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState( {loggedIn: true });
      } else {
        this.setState({loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Logout
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header text='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
