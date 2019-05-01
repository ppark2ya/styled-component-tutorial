import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Title>Cool!!!</Title>
      </Container>
    );
  }
}
