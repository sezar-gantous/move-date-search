import React from 'react';
import '@testing-library/jest-dom';
import MoviePagenation from './MoviePagenation';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MoviePagenation />, {});
    const testId = screen.getByTestId('PagenationContainer');
    expect(testId).toBeInTheDocument();
  });
});
