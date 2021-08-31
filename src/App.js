import React from 'react';
import { Home } from 'app/pages/Home';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 0.325em;
  padding-right: 0.325em;
`;
function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
