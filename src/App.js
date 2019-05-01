import React from 'react';
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

// Mixin
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

// Sass Nesting -> Container 컴포넌트에서 Card 컴포넌트를 사용하기 위해서는 Card 컴포넌트가 먼저 선언되어야함.
const Card = styled.div`
  background-color: white;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #2c3e50;
  ${Card} {
    background-color: #cecece;
  }
`;

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awesomeCard}
`;

const ThemeButton = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => {
    if(props.main) {
      return props.theme.mainColor;
    } else if(props.success) {
      return props.theme.successColor;
    } else if(props.danger) {
      return props.theme.dangerColor;
    }
  }}
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline:none;
  }
  background-color: ${ props => props.danger ? '#c0392b' : '#3498db'}
  ${props => {
    if(props.danger) {
      return css`animation: ${rotation} ${props.rotationTime}s infinite;`;
    }
  }}
`;

const Anchor = styled(Button.withComponent('a'))`
  text-decoration: none;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const handleClick = () => {
  alert('click!');
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Form />
          <Input placeholder="hello"/>
          <Button onClick={handleClick}>SUCCESS</Button>
          <Button danger rotationTime={5}>DANGER</Button>
          <Anchor href='http://www.google.com'>Go to Google</Anchor>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

const Form = () => (
  <Card>
    <ThemeButton main>MAIN</ThemeButton>
    <ThemeButton danger>DANGER</ThemeButton>
    <ThemeButton success>SUCCESS</ThemeButton>
  </Card>
)
export default App;
