import React, { Component } from 'react';

import { View, Text } from 'react-native';

import Header from '~/components/header';

import { Container } from './styles';

export default class post extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Text>
          Occaecat quis tempor magna laborum deserunt ex amet exercitation irure pariatur. Magna est
          non deserunt quis sit ipsum ut exercitation consectetur est proident non. Incididunt est
          labore anim ex ad mollit commodo laboris cupidatat.
        </Text>
      </Container>
    );
  }
}
