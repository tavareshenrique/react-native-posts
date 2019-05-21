import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Post from '~/components/post';

import { Container } from './styles/global';

export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <Container>
          <Post />
          <Post />
          <Post />
          <Post />
        </Container>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
