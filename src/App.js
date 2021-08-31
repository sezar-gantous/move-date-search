import React from 'react';
import { Home } from 'app/pages/Home';
import { PageHeader } from 'app/PageHeader';
import { PageFooter } from 'app/PageFooter';
import './App.css';

function App() {
  return (
    <>
      <PageHeader />
      <main>
        <Home />
      </main>
      <PageFooter />
    </>
  );
}

export default App;
