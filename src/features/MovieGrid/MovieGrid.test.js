import React from 'react';
import '@testing-library/jest-dom';
import MovieGrid from './MovieGrid';

describe('Smoke Test', () => {
  it('Renders without crashing', () => {
    render(<MovieGrid />, {});
    const testId = screen.getByTestId('movieGridContainer');
    expect(testId).toBeInTheDocument();
  });
});
