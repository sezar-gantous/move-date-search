import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Smoke Test', () => {
  it('Renders movieGridContainer ', () => {
    render(<Home />, {});
    const testId = screen.getByTestId('movieGridContainer');
    expect(testId).toBeInTheDocument();
  });
  it('Renders search ', () => {
    render(<Home />, {});
    const testId = screen.getByTestId('MovieDateSearchContainer');
    expect(testId).toBeInTheDocument();
  });
});
