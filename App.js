import React from 'react';
import { ScrollView } from 'react-native';

import Post from '~/components/post';

import { Container } from './styles/global';

export default function App() {
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
